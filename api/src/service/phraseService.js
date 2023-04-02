import dataPhrase from '../database/dataPhrases.js'
import translateEsToEn from './translate.js'

async function getPhrases() {
  try {
    return await dataPhrase.getAllPhrases()
  } catch (error) {
    throw error
  }
}

async function postPhrase(bodyPost) {
  const translatedText = await translateEsToEn(bodyPost.title)
  bodyPost.phrase = translatedText

  const newPhrase = {
    createDate: new Date().toLocaleString('en-US', { timezone: 'UTC' }),
    updatedDate: new Date().toLocaleString('en-US', { timezone: 'UTC' }),
    ...bodyPost
  }

  try {
    return await dataPhrase.postPhrase(newPhrase)
  } catch (error) {
    throw error
  }
}

async function patchPhrase(body) {
  const date = new Date().toLocaleString('en-US', { timezone: 'UTC' })
  try {
    return await dataPhrase.pathcPhrase(date, body)
  } catch (error) {
    throw error
  }
}

async function deletePhrase(id) {
  try {
    return await dataPhrase.deletePhrase(id)
  } catch (error) {
    throw error
  }
}

export default { getPhrases, postPhrase, patchPhrase, deletePhrase }