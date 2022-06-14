const Router = require('express')
const routes = new Router()

const userRouter = require('./userRouter')
const profileRouter = require('./profileRouter')
const messageRouter = require('./messageRouter')
const frendsRouter = require('./frendsRouter')
const ratingRouter = require('./ratingRouter')
const photoRouter = require('./photoRouter')
const sexRouter = require('./sexRouter')
const genderRouter = require('./genderRouter')

routes.use('/user', userRouter)
routes.use('/profile', profileRouter)
routes.use('/message', messageRouter)
routes.use('/frends', frendsRouter)
routes.use('/rating', ratingRouter)
routes.use('/photo', photoRouter)
routes.use('/sex', sexRouter)
routes.use('/gender', genderRouter)

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes
