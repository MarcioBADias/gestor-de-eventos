const mongoose = require('mongoose')
const { serviceSchema } = require('./service')

const { schema } = mongoose


const eventSchema = new schema (
    {
        title:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        budget:{
            type: Number,
            required: true
        },
        image:{
            type: String,
            required: true
        },
        services:{
            type: [serviceSchema]
        }
    },
    { timestamp: true }
)

const Event = mongoose.model('event', eventSchema)

module.exports = Event