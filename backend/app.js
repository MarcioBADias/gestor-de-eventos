const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const conn = require('./db/conn')

conn()

app.listen(3000, () => console.log('Servidor 3000 on!PAI DA ON PORRA!'))
