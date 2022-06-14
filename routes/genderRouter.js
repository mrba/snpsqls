const Router = require('express')
const routes = new Router()
const genderController = require('../controllers/genderController')
routes.post('/', genderController.create)
routes.get('/', genderController.getAll)

module.exports = routes
