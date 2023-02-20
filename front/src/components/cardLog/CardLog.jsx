import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../card/Card.jsx'
import './carLog.css'

const getPath = `http://localhost:5001/api/v1/phrase`

export default function CardLog() {
  const [ todos, setTodos ] = useState([])

  useEffect(()=> {
    const loadTodos = async () => {
      try {
        const todos = await axios.get(getPath)
        setTodos(todos.data.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    loadTodos()
  }, [])

  return (
    <div className='cardLog'>
      {
        todos.map(todo => {
          return (
            <Card 
              title={todo.title}
              phrase={todo.phrase}
            />
          )
        })
      }
    </div>
  )
}