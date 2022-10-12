const Router = require('express')
const ProductController = require('../controllers/productController')

const router = new Router()

router.route('/products').get(ProductController.getAllProducts)
router.route('/products/:id').get(ProductController.getCategoryProducts)
router.route('/product/:slug').get(ProductController.getSingleProduct)

router.route('/product/new').post(ProductController.createProduct)

router.route('/products/delete/:id').delete(ProductController.deleteProduct)

module.exports = router