const express = require('express')
const router = express.Router()

router.use('/api/user',require('./user.router'))
router.use('/api/login',require('./login.router'))
router.use('/api/auth',require('./auth.router'))
router.use('/api/product',require('./products.router'))

module.exports = router
