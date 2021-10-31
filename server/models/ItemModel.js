const mongoose = require("mongoose");

const itemSchema = {
     productName: {
        type: String,
        required: true,
        trim: true,
    }, 

    size: {
        type: String,
    },

    sku: {
        type: Number,
    },

    rrp: {
        type: Number,
        required: true,
        min: 0.99,
    },

    promo: {
        type: Number,
        required: true,
        min: 0.99,
    },

    status: {
        type: String,
    },
};

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;