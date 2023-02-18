import dataBase from './databaseConection.js'
// import db from '../../db.json' assert { type: 'json' }
// import utils from './utils.js'

const Todo = dataBase.squema()

async function getAllPhrases() {
  try {
    await dataBase.conection()
    const allTodos = await Todo.find({})
    await dataBase.close()
    return allTodos
  } catch(err) {
    console.log(err.message)
  }
}

async function postPhrase(newPhrase) {
  try {
    // Verificar si existe. ===========
    await dataBase.conection()
    const newTask = new Todo({
      createDate: newPhrase.createDate,
      updatedDate: newPhrase.updatedDate,
      isArchived: newPhrase.isArchived,
      title: newPhrase.title,
      phrase: newPhrase.phrase,
      color: newPhrase.color
    })
    await newTask.save()
    await dataBase.close()
    return true
  } catch(err){
    console.log('An erro has ocurrent!\n', err)
  }
}

async function deletePhrase (title) {
  try {
    await dataBase.conection()
    const isdeleted = await Todo.deleteOne({ title: title })
    await dataBase.close()
    return isdeleted.deletedCount != 0 ? true : false 
  } catch (error){
    console.log(error.message)
  }
}

async function pathcPhrase (date, body){
  try {
    await dataBase.conection()
    const updated = await Todo.updateOne({ title: body.title }, {
      updatedDate: date,
      isArchived: body.isArchived,
      title: body.title,
      phrase: body.phrase,
      color: body.color,
    })
    await dataBase.close()
    return updated.modifiedCount != 0 ? true : false
  } catch(err) {
    console.log(err.message)
  }
}

export default { getAllPhrases, postPhrase, deletePhrase, pathcPhrase}