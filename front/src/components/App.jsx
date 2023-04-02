import './app.css'
import AddBar from './adBar/AddBar.jsx'
import CardLog from './cardLog/CardLog.jsx' 
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App () {
  const getPath = `http://localhost:5001/api/v1/phrase`
  const [ todos, setTodos ] = useState([])
  const [ sendTodo, setSendTodo ] = useState(0)
  
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos = await axios.get(getPath)
        setTodos(todos.data.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    loadTodos()
    // console.log(sendTodo)
  }, [ sendTodo ])

  return (
    <div className="app">
      <AddBar setSendTodo={ setSendTodo } senTodo={ sendTodo } />
      <CardLog todos={ todos } setSendTodo={ setSendTodo } senTodo={ sendTodo } />
    </div>
  )
}