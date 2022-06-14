const Router = require('express')
const routes = new Router()
const sexController = require('../controllers/sexController')
routes.post('/', sexController.create)
routes.get('/', sexController.getAll)

module.exports = routes
