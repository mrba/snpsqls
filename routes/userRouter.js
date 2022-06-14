const Router = require('express')
const routes = new Router()
const userController = require('../controllers/userController')

routes.post('/registration', userController.registration)
routes.post('/login', userController.login)
routes.get('/auth', userController.check)

module.exports = routes
