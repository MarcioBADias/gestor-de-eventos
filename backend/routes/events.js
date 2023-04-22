const router = require('express').Router()

const eventController = require('../controllers/eventController')

router
    .route('/events')
    .post((req, res) => eventController.create(req,res))

router
    .route('/events')
    .get((req, res) => eventController.getAll(req, res))

router
    .route('/events/:id')
    .get((req,res) => eventController.getId(req,res))

router
    .route('/events/:id')
    .delete((req,res) => eventController.delete(req,res))
    
module.exports = router