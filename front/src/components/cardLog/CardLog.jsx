import Card from '../card/Card.jsx'
import axios from 'axios'
import './carLog.css'

export default function CardLog({ todos, setSendTodo, senTodo }) {
  const deletePath = 'http://localhost:5001/api/v1/phrase/'
  const onDelete = async (id) => {
    try {
      const isDeleted = await axios.delete(`${deletePath}${id}`)
      setSendTodo(senTodo + 1)
      console.log(isDeleted.data.message)
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      {
        todos.map(todos => {
          return (
            <div className='cardLog'>
              <Card
                key={todos._id}
                title={todos.title}
                // phrase={todos.phrase}
              />
              <button onClick={() => onDelete(todos._id)}>Done</button>
            </div> 
          )
        })
      }
    </div>
  )
}