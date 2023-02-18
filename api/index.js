import express from 'express'
import phraseRouter from './src/v1/routes/phases.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const expressApp = express()
const PORT = process.env.PORT

expressApp.use(cors())
expressApp.use(express.json())
expressApp.use('/api/v1/phrase', phraseRouter)

expressApp.listen(PORT, () => {
  console.log(`🚀 Servidor lanzado en ${PORT}`)
})