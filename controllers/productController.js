const ProductService = require('../service/productService')
const Product = require('../model/productModel')
const ApiError = require('../exception/apiError')

class ProductController {
    async getAllProducts(req, res, next) {
        const resultPerPage = 60
        const {products, productsCount, filteredProductsCount} = await ProductService.getAllProduct(req.query, resultPerPage)

        return res.json({
            products,
            productsCount,
            filteredProductsCount,
            resultPerPage
        })
    }

    async createProduct(req, res, next) {
        const product = await ProductService.createProduct(req.body)
        return res.json(product)
    }

    async getSingleProduct(req, res, next) {
        const product = await Product.find({slug: req.params.slug})

        if (!product) {
            throw ApiError.BadRequest('product not found')
        }

        return res.status(201).json({product})
    }

    async getCategoryProducts(req, res) {
        const products = await Product.find({category_id: req.params.id})

        if(!products) throw ApiError.BadRequest('product not found')

        return res.status(201).json(products)
    }

    async deleteProduct(req, res, next) {
        const product = await ProductService.deleteProduct(req.params.id)
        if(!product) throw ApiError.BadRequest('product not found')

        return res.json({
            product,
            message: 'Successfully'
        })
    }
}

module.exports = new ProductController()