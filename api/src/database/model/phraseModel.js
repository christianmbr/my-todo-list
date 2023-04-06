import { Schema, model } from 'mongoose'

const Phrase = new Schema({
  title: {
    type: String,
    required: true
  },
  phrase: {
    type: String,
    required: true
  },
  isArchived: Boolean,
  color: String,
  userId: {
    ref: 'User',
    type: Schema.Types.ObjectId
    // required: true
  }
},
{
  versionKey: false,
  timestamps: true
})

export default model('todo', Phrase)
