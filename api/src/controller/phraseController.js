import phraseService from '../service/phraseService.js'

async function getOnePhrase (req, res) {
  try {
    const idPhrase = req.params.id
    const phraseFound = await phraseService.getOnePhrase(idPhrase)

    return res.status(200).json({ status: 200, message: 'Phrase is found', data: phraseFound })
  } catch (error) {
    console.log(error.message)
    return res.json({ status: 456, message: 'Error' })
  }
}

async function getPhrases (req, res) {
  try {
    const phrase = await phraseService.getPhrases(req.userId)
    return res.status(200).send({
      status: 'OK',
      data: phrase
    })
  } catch (error) {
    return res.status(500).send({
      status: 'FAILED',
      error
    })
  }
}

async function postPhrase (req, res) {
  try {
    const { isArchived, title, phrase, color } = req.body
    if (!(isArchived && title && phrase && color)) {
      return res.status(401).send({
        status: 'FAILED',
        error: 'One of the keys are missing or empty.'
      })
    }
    const newPhrase = {
      isArchived,
      title,
      phrase,
      color,
      userId: req.userId
    }

    const newPhraseCreated = await phraseService.postPhrase(newPhrase)
    if (!newPhraseCreated) {
      res.status(409).send({
        status: 'Failed',
        message: 'The phrase could not be entered. It may be because one already exists.'
      })
    }

    return res.status(201).send({ status: 'OK', message: 'The phrase was added.', data: newPhraseCreated })
  } catch (error) {
    return res.status(500).send({
      status: 'FAILED',
      message: 'something went wrong'
    })
  }
}

async function patchPhrase (req, res) {
  try {
    if (!req.params.id) {
      return res.status(401).send({
        status: 'FAILED',
        message: 'One of the keys are missing or empty.'
      })
    }

    const isUpdated = await phraseService.patchPhrase(req.userId, req.params.id, req.body)
    return isUpdated
      ? res.status(201).send({ status: 'OK', message: 'The phrase was updated.' })
      : res.status(409).send({ status: 'FAILED', message: 'The phrase could not be updated. It may be the phrase does not exist.' })
  } catch (error) {
    return res.status(500).send({
      status: 'FAILED',
      error
    })
  }
}

async function deletePhrase (req, res) {
  try {
    const isDeleted = await phraseService.deletePhrase(req.userId, req.params.id)
    return isDeleted
      ? res.status(201).send({ status: 'OK', message: 'The phrase was deleted successfully' })
      : res.status(404).send({ status: 'Failed', message: 'The phrase could not be deleted. It may be because the phrase does not exist.' })
  } catch (error) {
    return res.status(500).send({
      status: 'FAILED',
      error
    })
  }
}

export default { getPhrases, postPhrase, patchPhrase, deletePhrase, getOnePhrase }
