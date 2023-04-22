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
                services: req.body.services,
            }

            if(event.services && !checkEventBudget(event.budget, event.service)){
                res
                    .status(406)
                    .json({ msg: 'o Seu orçamento é insuficiente' })
                return
            }

            const response = await EventModel.create(event)

            res
                .status(201)
                .json({ response, msg: 'serviço criado com sucesso'} )

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const events = await EventModel.find()

            res.json(events)
        } catch (error) {
            console.log(error)
        }
    },
    getId: async (req, res) => {
        try {
            const id = req.params.id
            const event = await EventModel.findById(id)

            if(!event){
                res
                    .status(404)
                    .json({ msg: 'Evento não encontrado' })
                return
            }

            res.json(event)

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const event = await EventModel.findById(id)

            if(!event){
                res
                    .status(404)
                    .json({ msg: 'Evento não encontrado' })
            }

            const deleteEvent = await EventModel.findByIdAndDelete(id)

            res.status(200).json({ msg: 'Evento excluído com sucesso!' })

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id

        const event = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            budget: req.body.budget,
            image: req.body.image,
            services: req.body.services,
        }

        const updateEvent = await EventModel.findByIdAndUpdate(id, event)

        if(!event){
            res
                .status(404)
                .json({ msg: 'Evento não encontrado.' })
        }

        res
            .status(200)
            .json({ msg: 'Evento atualizado com sucesso!' })
    }
}

module.exports = eventController