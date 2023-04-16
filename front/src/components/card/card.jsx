import './card.css'
import { NavLink } from 'react-router-dom'

export default function Card ({ phraseId, phrase, phraseSpanish }) {
  return (
    <NavLink
      to={'card/' + phraseId} className={({ isActive, isPending }) =>
        isActive
          ? 'card-selected'
          : isPending
            ? 'card-pending'
            : 'card'}
    >
      <h3 className='card-phrase'>{phrase.toUpperCase()}</h3>
      <h4 className='card-title'>{phraseSpanish}</h4>
    </NavLink>
  )
}
