import './addBar.css'
import axios from 'axios'
import { useState } from 'react'

export default function AddBar ({ senTodo, setSendTodo }) {
  const postPath = 'http://localhost:5001/api/v1/phrase'
  const [ newTodo, setNewTodo ] = useState('')
  const [ color, setColor ] = useState('#red')

  const send = async () => {
    try {
      return await axios.post(postPath, {
        isArchived: "false",
        title: newTodo,
        phrase: "...",
        color: color
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  const onsubmit = async (event) => {
    try {
      event.preventDefault()
      setNewTodo('')
      await send()
      setSendTodo(senTodo + 1)
    } catch(err) {
      console.log(err.message)
    }
  }
  
  const onChangeTodo = (event) => {
    setNewTodo(event.target.value)
  }

  const handleColorPanelRed = () => setColor('#red')
  const handleColorPanelGreen = () => setColor('#green')
  const handleColorPanelBlue = () => setColor('#blue')

  return (
    <div>
      <form className='addBarForm' onSubmit={ onsubmit }>
        <input className="addBarSearch" type="text" onChange={ onChangeTodo } value={ newTodo } placeholder='Here your new phrase'/>
        <div className='addBarFormColorPanel'>
          <div className={color === '#red' ? 'colorPanel red selected' : 'colorPanel red'} onClick={handleColorPanelRed}></div>
          <div className={color === '#green' ? 'colorPanel green selected' : 'colorPanel green'} onClick={handleColorPanelGreen}></div>
          <div className={color === '#blue' ? 'colorPanel blue selected' : 'colorPanel blue'} onClick={handleColorPanelBlue}></div>
        </div>
        <button className='addBarButton' type='submit'>Send</button>
      </form>
    </div>
  )
}