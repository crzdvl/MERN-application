const Validation = require('../validation');

/**
 * @exports
 * @class
 * @extends Validation
 */
class WishValidation extends Validation {
    /**
     * @param {String} data.id - objectId
     * @returns
     * @memberof SomeValidation
     */
    create(data) {
        return this.Joi
            .object({
                title: this.Joi
                    .string()
                    .min(3)
                    .max(30)
                    .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
                    .required(),
                description: this.Joi
                    .string()
                    .min(3)
                    .max(300)
                    .required(),
            })
            .validate(data);
    }

    /**
     * @param {String} data.id - objectId
     * @returns
     * @memberof SomeValidation
     */
    wish(data) {
        return this.Joi
            .object({
                id: this.Joi
                    .objectId()
                    .required(),
                title: this.Joi
                    .string()
                    .min(3)
                    .max(30)
                    .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/),
                description: this.Joi
                    .string()
                    .min(3)
                    .max(250),
            })
            .validate(data);
    }
}

module.exports = new WishValidation();
