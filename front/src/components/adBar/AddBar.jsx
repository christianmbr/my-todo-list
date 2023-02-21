import './addBar.css'
import axios from 'axios'
import { useState } from 'react'

export default function AddBar ({ senTodo, setSendTodo }) {
  const postPath = 'http://localhost:5001/api/v1/phrase'
  const [ newTodo, setNewTodo ] = useState('')

  const send = async () => {
    try {
      return await axios.post(postPath, {
        isArchived: "false",
        title: newTodo,
        phrase: "...",
        color: "red"
      }) 
    } catch (err) {
      console.log(err.message)
    }
  }

  const onsubmit = async (event) => {
    try {
      event.preventDefault()
      await send()
      setNewTodo('')
      setSendTodo(senTodo + 1)
    } catch(err) {
      console.log(err.message)
    }
  }
  
  const onChangeTodo = (event) => {
    setNewTodo(event.target.value)
  }

  return (
    <div className='addBar'>
      <form onSubmit={ onsubmit }>
        <input type="text" onChange={ onChangeTodo } value={ newTodo } placeholder='Your new to do'/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}