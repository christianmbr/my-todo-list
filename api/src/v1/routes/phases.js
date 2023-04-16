import express from 'express'
import { authToken } from '../../middleware/authMiddleware.js'
import phraseController from '../../controller/phraseController.js'

const phraseRouter = express.Router()

phraseRouter.route('/')
  .get(authToken, phraseController.getPhrases)
  .post(authToken, phraseController.postPhrase)

phraseRouter.route('/:id')
  .get(authToken, phraseController.getOnePhrase)
  .patch(authToken, phraseController.patchPhrase)
  .delete(authToken, phraseController.deletePhrase)

export default phraseRouter
