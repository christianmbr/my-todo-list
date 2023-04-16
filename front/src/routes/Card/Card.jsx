import axios from 'axios'
import './card.css'
import { useLoaderData, Form, redirect } from 'react-router-dom'

export async function loader ({ params }) {
  const findPhrasePaht = 'http://localhost:5001/api/v1/phrase/' + params.phraseId
  const token = localStorage.getItem('phraseBook')

  const phraseFound = await axios.get(findPhrasePaht, {
    headers: {
      'x-access-token': token
    }
  })

  return phraseFound.data.data
}

export async function action ({ params }) {
  const deletePhrasePaht = 'http://localhost:5001/api/v1/phrase/' + params.phraseId
  const token = localStorage.getItem('phraseBook')

  await axios.delete(deletePhrasePaht, {
    headers: {
      'x-access-token': token
    }
  })

  return redirect('/')
}

export default function Card () {
  const phrase = useLoaderData()
  return (
    <div className='focus-card-container'>
      <h1 className='focus-card-phrase'>{phrase.phrase.toUpperCase()}</h1>
      <h2 className='focus-card-title'>{phrase.title}</h2>
      <Form method='post'>
        <button type='submit'>
          <span>
            Learned
          </span>
        </button>
      </Form>
    </div>
  )
}
