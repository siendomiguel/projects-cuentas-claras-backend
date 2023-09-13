import express from 'express'
import dbConnect from './config/database.js'
import { router } from './src/routes/index.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

const port = process.env.PORT || 5000

dbConnect.once('open', () => {
  console.log('🟢 Conectado a la base de datos')

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})

dbConnect.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err)
})

app.use(cors())
app.use(express.json())

app.use('/', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})