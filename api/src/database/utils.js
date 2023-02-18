import fs from 'fs'
function saveNewPhraseDataBase(db) {
  const jsonString = JSON.stringify(db, null, 2)
  fs.writeFile('./db.json', jsonString, {
    encoding: "utf-8",
  }, err => {
    if (err) {
      console.log(err)
    }
  })
}

export default { saveNewPhraseDataBase }