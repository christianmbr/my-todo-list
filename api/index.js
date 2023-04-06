import dataBase from './src/database/databaseConection.js'
import phraseRouter from './src/v1/routes/phases.js'
import authRouter from './src/v1/routes/authRouter.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
dataBase.conection().then(db => console.log('Server is conected')).catch(error => console.error(error))

const expressApp = express()
const PORT = process.env.PORT

expressApp.use(cors())
expressApp.use(express.json())
expressApp.use('/api/v1/auth', authRouter)
expressApp.use('/api/v1/phrase', phraseRouter)

expressApp.listen(PORT, () => {
  console.log(`🚀 Servidor lanzado en ${PORT}`)
})
