const mongoose = require('mongoose')

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://marciobadias:4MIsYz3fOw54RsF0@cluster0.eucdza7.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log('conectado ao banco de dados na nuvem')
    } catch (error) {
        console.log(`erro: ${error}`)
    }
}

module.exports = main