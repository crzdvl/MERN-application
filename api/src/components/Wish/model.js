const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const WishSchema = new Schema(
    {
        title: {
            type: Schema.Types.Mixed,
            trim: true,
            required: true,
        },
        description: {
            type: Schema.Types.Mixed,
            trim: true,
            required: true,
        },
    },
    {
        collection: 'collection',
        versionKey: false,
        timestamps: true,
    },
);

module.exports = connections.model('WishModel', WishSchema);
