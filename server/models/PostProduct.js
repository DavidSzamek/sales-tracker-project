const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema ({
    productName: {
        type: String,
        required: true,
        trim: true,
    }, 

    size: {
        type: String,
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

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;