import './card.css'

export default function Card({ title, phrase }) {
  return (
    <div className="card">
      <div className='cardInfo'>
        <h2>{ title }</h2>
        <p>{ phrase }</p>
        <br />
      </div>
    </div>
  )
}