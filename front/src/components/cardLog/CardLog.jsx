import Card from '../card/card'
import './cardLog.css'

export default function CardLog ({ allPhrases }) {
  return (
    <div className='card-log'>
      {
        allPhrases != null
          ? allPhrases.map(phrase => {
            return <Card key={phrase._id} phraseId={phrase._id} phrase={phrase.phrase} phraseSpanish={phrase.title} />
          })
          : null
      }
    </div>
  )
}
