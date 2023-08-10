const {Router} = require('express')

const SessionsController = require('../Controllers/SessionsControllers')
const sessionsController = new SessionsController()

const sessionsRoutes = Routes()
sessionsRoutes.post ('/', sessionsController.create)

module.exports = sessionsRoutes