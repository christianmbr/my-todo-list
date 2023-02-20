import AddBar from './adBar/AddBar.jsx'
import CardLog from './cardLog/CardLog.jsx' 
import './app.css'

export default function App () {
  return (
    <div className="principalContainer">
      <AddBar />
      <CardLog />
    </div>
  )
}