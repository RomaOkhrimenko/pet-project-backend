const mongoose = require('mongoose')

const orderModel = new mongoose.Schema({
    products: [
        {
            counts: {
                type: Number
            },
            currentPrice: {
                type: Number
            },
            name: {
                type: String,
            },
            price: {
                type: Number
            },
            id: {
                type: Number
            },
            images: {
                type: String
            }
        }
    ],
    name: {
        type: String,
        required: [true, "Please Enter name"]
    },
    phone: {
        type: String,
        required: [true, "Please Enter phone"]
    },
    surname: {
        type: String,
        required: [true, "Please Enter surname"]
    },
    post: {
        type: String,
        required: [true, "Please Enter post"]
    },
    totalPrice: {
        type: Number,
        required: [true, "Please Enter Product Total Price"]
    }
})

module.exports = mongoose.model('Order', orderModel)