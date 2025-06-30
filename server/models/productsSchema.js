const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    avatar: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;