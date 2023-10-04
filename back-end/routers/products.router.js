const express = require('express')
const router = express.Router()
const product_controller = require('../controllers/products.controller')

router.post('/' , product_controller.createProduct)
router.get('/' , product_controller.getAllProducts)
router.get('/new' , product_controller.newProduct)


module.exports = router





