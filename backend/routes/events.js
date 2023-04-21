const router = require('express').Router()

const eventController = require('../controllers/eventController')

router
    .route('/events')
    .post((req, res) => eventController.create(req,res))
    
module.exports = router