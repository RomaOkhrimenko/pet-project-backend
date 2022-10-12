const Order = require('../model/orderModel')

class OrderController {
    async getAllOrder(req, res) {
        const orders = await Order.find()
        return res.status(201).json(orders)
    }

    async createOrder(req, res) {
        const product = await Order.create(req.body)

        return res.json(product)
    }

    async deleteProduct(req, res) {
        const product = await Order.find({id: req.params.id})
        await product.remove()

        return res.json(product)
    }
}

module.exports = new OrderController()