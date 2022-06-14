const Router = require('express')

const routes = new Router()

routes.post('/registration')
routes.post('/login')
routes.get('/auth')

module.exports = routes
