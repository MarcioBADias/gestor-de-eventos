const EventModel = require('../models/event')

const checkEventBudget = (budget, services) => {
    const priceSum = services.reduce((acc, service) => acc + service.price, 0)

    if(priceSum > budget) {
        return false
    }

    return true
}

const eventController = {
    create: async (req,res) => {
        try {
            const event = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.service,
            }

            if(event.services && !checkEventBudget(event.budget, event.service)){
                res
                    .status(406)
                    .json({ msg: 'o Seu orçamento é insuficiente' })
                return
            }

            const response = await EventModel.create(event)

            res.status(201).json(response, { msg: 'Evento criado com sucesso' })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = eventController