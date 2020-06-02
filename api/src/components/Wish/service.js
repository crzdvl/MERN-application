const WishModel = require('./model');

/**
 * @method getSomeData
 * @param {any}
 * @returns {any}
 */
function findAll() {
    return WishModel.find({}).exec();
}

/**
 * @method getSomeData
 * @param {any}
 * @returns {any}
 */
function findById(_id) {
    return WishModel.find({ _id }).exec();
}

/**
 * @method create
 * @param {data}
 * @returns {any}
 */
function create(data) {
    return WishModel.create(data);
}

/**
 * @method update
 * @param {data}
 * @returns {any}
 */
function update(_id, newData) {
    return WishModel.updateOne({ _id }, newData).exec();
}

/**
 * @exports
 * @method deleteById
 * @param {string} _id
 * @summary delete a user from database
 * @returns {Promise<void>}
 */
function deleteById(_id) {
    return WishModel.deleteOne({ _id }).exec();
}

module.exports = {
    create,
    update,
    findAll,
    findById,
    deleteById,
};
