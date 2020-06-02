const WishService = require('./service');
const WishValidation = require('./validation');
const ValidationError = require('../../error/ValidationError');

/**
 * @function deleteWish
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAllWishes(req, res, next) {
    try {
        const wishes = await WishService.findAll();

        return res.status(200).json({
            success: true,
            // eslint-disable-next-line no-underscore-dangle
            data: wishes,
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                success: false,
                error: 'Wishes not found.',
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}

/**
 * @function createWish
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function createWish(req, res, next) {
    try {
        const { error } = WishValidation.create(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const data = await WishService.create(req.body);

        return res.status(200).json({
            success: true,
            // eslint-disable-next-line no-underscore-dangle
            id: data._id,
            message: 'Wish created!',
        });
    } catch (error) {
        console.log(error);
        if (error instanceof ValidationError) {
            return res.status(422).json({
                success: false,
                error: 'Check your wish, please.',
                err: error,
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}


/**
 * @function updateWish
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function updateWish(req, res, next) {
    try {
        const { error } = WishValidation.wish(req.params);

        if (error) {
            throw new ValidationError(error.details);
        }

        // eslint-disable-next-line no-underscore-dangle
        const data = await WishService.update(req.params.id, req.body);
        console.log(data, req.params, req.body);
        return res.status(200).json({
            success: true,
            // eslint-disable-next-line no-underscore-dangle
            id: data._id,
            message: 'Wish updated!',
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                success: false,
                error: 'Check your wish, please.',
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}


/**
 * @function deleteWish
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function deleteWish(req, res, next) {
    try {
        const { error } = WishValidation.wish(req.params);

        if (error) {
            throw new ValidationError(error.details);
        }

        // eslint-disable-next-line no-underscore-dangle
        const data = await WishService.deleteById(req.params.id);

        console.log(data);

        return res.status(200).json({
            success: true,
            // eslint-disable-next-line no-underscore-dangle
            id: data._id,
            message: 'Wish deleted!',
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                success: false,
                error: 'Wish not found.',
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}


/**
 * @function deleteWish
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findWish(req, res, next) {
    try {
        const { error } = WishValidation.wish(req.params);

        if (error) {
            throw new ValidationError(error.details);
        }

        // eslint-disable-next-line no-underscore-dangle
        const wish = await WishService.findById(req.params.id);

        return res.status(200).json({
            success: true,
            // eslint-disable-next-line no-underscore-dangle
            data: wish,
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                success: false,
                error: 'Wish not found.',
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}

module.exports = {
    createWish,
    updateWish,
    deleteWish,
    findWish,
    findAllWishes,
};
