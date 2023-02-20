import './card.css'

export default function Card({ title, phrase }) {
  return (
    <div className="card">
      <div className='cardInfo'>
        <p>{ title }</p>
        <p>{ phrase }</p>
      </div>
    </div>
  )
}