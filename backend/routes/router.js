const router = require('express').Router()

const serviceRouter = require('./services')

router.use('/', serviceRouter)

const eventRouter = require('./events')

router.use('/', eventRouter)

module.exports = router