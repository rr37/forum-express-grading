const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')

// admin 總路由
router.use('/admin', admin)

// Restaurants
router.get('/restaurants', restController.getRestaurants)

// 錯誤處理
router.use('/', apiErrorHandler)
module.exports = router
