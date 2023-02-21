import express from 'express'
import phraseController from '../../controller/phraseController.js'

const phraseRouter = express.Router()

phraseRouter.route('/')
  .get(phraseController.getPhrases)
  .post(phraseController.postPhrase)
  .patch(phraseController.patchPhrase)

phraseRouter.route('/:id')
  // .get(phraseController.getPhrase)
  .delete(phraseController.deletePhrase)

export default phraseRouter