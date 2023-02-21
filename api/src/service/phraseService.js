import dataPhrase from '../database/dataPhrases.js'
import { v4 }from 'uuid' // Crea una id unica de la siguiente manera v4()

async function getPhrases() {
  try {
    return await dataPhrase.getAllPhrases()
  } catch (error) {
    throw error
  }
}

async function postPhrase(phrase) {
  const newPhrase = {
    id: v4(),
    createDate: new Date().toLocaleString('en-US', { timezone: 'UTC' }),
    updatedDate: new Date().toLocaleString('en-US', { timezone: 'UTC' }),
    ...phrase
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