import Phrase from './model/phraseModel.js'

async function getOnePhrase (idPhrase) {
  try {
    const phraseFound = await Phrase.findById(idPhrase)
    return phraseFound
  } catch (error) {
    console.log(error.message)
  }
}

async function getAllPhrases (userId) {
  try {
    const allPhrases = await Phrase.find({ userId })
    return allPhrases
  } catch (err) {
    console.log(err.message)
  }
}

async function postPhrase (newPhrase) {
  try {
    const phrase = new Phrase({
      isArchived: newPhrase.isArchived,
      title: newPhrase.title,
      phrase: newPhrase.phrase,
      color: newPhrase.color,
      userId: newPhrase.userId
    })
    const newPhraseCreated = await phrase.save()
    return newPhraseCreated
  } catch (err) {
    console.log('An erro has ocurrent!\n', err)
  }
}

async function deletePhrase (userId, id) {
  try {
    const isDeleted = await Phrase.deleteOne({ userId, _id: id })
    return isDeleted.deletedCount !== 0
  } catch (error) {
    console.log(error.message)
  }
}

async function pathcPhrase (userId, paramsId, body) {
  try {
    await Phrase.updateOne({ userId, _id: paramsId }, body)
    return true
  } catch (err) {
    console.log(err.message)
  }
}

export default { getAllPhrases, postPhrase, deletePhrase, pathcPhrase, getOnePhrase }
