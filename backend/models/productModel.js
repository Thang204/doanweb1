const mongoose = require("mongoose");
const { contains } = require("validator");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },  
    sizes: {
        type: Array,
        required: true,
    },
    bestseller: {
        type: Boolean,
    },
    date: {
        type: Number,
        required: true,
    },
});


const ProductModel = mongoose.models.product || mongoose.model('product', productSchema);
const Product = ProductModel;

module.exports = Product