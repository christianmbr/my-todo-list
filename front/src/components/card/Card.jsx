import './card.css'

export default function Card({ title, phrase, color }) {
  const colors = {
    '#red': '#F68E60',
    '#green': '#98E9AB',
    '#blue': '#A0E3DC'
  }

  return (
    <div className="card" style={{backgroundColor: colors[color]}}>
      <div className='cardInfo'>
        <h2 className='cardText'>{ title }</h2>
        <p className='cardPhrase'>{ phrase }</p>
        <br />
      </div>
    </div>
  )
}