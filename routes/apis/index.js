const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const admin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')
const userController = require('../../controllers/apis/user-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')

// admin 總路由
router.use('/admin', admin)

// 註冊、登入、登出
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

// Restaurants
router.get('/restaurants', restController.getRestaurants)

// 錯誤處理
router.use('/', apiErrorHandler)
module.exports = router
