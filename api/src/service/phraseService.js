import dataPhrase from '../database/dataPhrases.js'
import translateEsToEn from './translate.js'

async function getPhrases (userId) {
  try {
    return await dataPhrase.getAllPhrases(userId)
  } catch (error) {
    console.log(error.message)
  }
}

async function postPhrase (newPhrase) {
  try {
    const translatedText = await translateEsToEn(newPhrase.title)
    newPhrase.phrase = translatedText

    return await dataPhrase.postPhrase(newPhrase)
  } catch (error) {
    console.log(error.message)
  }
}

async function patchPhrase (userId, paramsId, body) {
  try {
    return await dataPhrase.pathcPhrase(userId, paramsId, body)
  } catch (error) {
    console.log(error.message)
  }
}

async function deletePhrase (userId, phraseId) {
  try {
    return await dataPhrase.deletePhrase(userId, phraseId)
  } catch (error) {
    console.log(error.message)
  }
}

export default { getPhrases, postPhrase, patchPhrase, deletePhrase }
