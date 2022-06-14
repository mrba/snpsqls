const Router = require('express')
const routes = new Router()
const frendsControler = require('../controllers/frendsController')

routes.get('/', frendsControler.getAll)
routes.post('/', frendsControler.create)

module.exports = routes
