const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    product_banner_img: {
        type: String,
        required: [true, "Please Enter Product Banner Image"]
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"]
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: [true, "Please Enter Product Category"]
    },
    category_id: {
        type: Number,
        required: [true, "Please Enter Category Slug"]
    },
    slug: {
        type: String,
        required: [true, "Please Enter Product slug"]
    },
    in_stock: {
        type: Boolean,
        required: [true, 'Please Enter Product Stock']
    },
    opt_price: {
        type: Array,
        required: [true, "Please Enter Product Opt Price"]
    },
    product_banner_category: {
        type: String,
        required: [true, 'Please enter product banner category']
    }
})

module.exports = mongoose.model("Product", productSchema)