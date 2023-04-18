const mongoose = require('mongoose')

const { schema } = mongoose

const serviceSchema = new schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    image: {
        type:String,
        required: true
    }
})