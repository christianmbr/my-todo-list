import mongoose from 'mongoose'

const url = process.env.MONGO_PATH
mongoose.set('strictQuery', false)

function conection() {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

function squema() {
  const newSquema = new mongoose.Schema ({
    createDate: String,
    updatedDate: String,
    isArchived: Boolean,
    title: {
      type: String,
      unique: true,
      required: true
    },
    phrase: {
      type: String,
      required: true
    },
    color: String
  })

  return mongoose.model('todo', newSquema)
}

function close() {
  mongoose.disconnect()
}

export default { conection, squema, close }
