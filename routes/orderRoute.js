const Router = require('express')
const orderController = require('../controllers/OrderController')

const router = new Router()

router.route('/orders').get(orderController.getAllOrder)
router.route('/create/order').post(orderController.createOrder)
router.route('/delete/order/:id').delete(orderController.deleteProduct)

module.exports = router