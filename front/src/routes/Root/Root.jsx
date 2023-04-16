import { Outlet, useLoaderData, redirect } from 'react-router-dom'
import './root.css'
import axios from 'axios'

// Components.
import CardLog from '../../components/cardLog/CardLog'
import NavBarLogIn from '../../components/navBar/navBarLogIn/NavBarLogIn'
import NavBarLogOut from '../../components/navBar/navBarLogOut/NavBarLogOut'
import CreatePhraseForm from '../../components/createPhraseForm/CreatePhraseForm'

export async function loader () {
  try {
    const token = localStorage.getItem('phraseBook')
    const getAllPhrasesPath = 'http://localhost:5001/api/v1/phrase'

    if (!token) { return null }

    const allPhrases = await axios.get(getAllPhrasesPath, {
      headers: {
        'x-access-token': token
      }
    })

    const status = allPhrases.data.status
    // Status 3 means: Authentication error.
    if (status === 3) { return null }

    return allPhrases.data.data
  } catch (error) {
    console.error(error.message)
  }
}

export async function action ({ request }) {
  try {
    const formData = await request.formData()
    const valuesToSendFromForm = Object.fromEntries(formData)

    const sendOnePhrasePhat = 'http://localhost:5001/api/v1/phrase'
    const token = localStorage.getItem('phraseBook')
    const creatingNewPhrase = {
      title: valuesToSendFromForm.phrase,
      phrase: '...',
      color: 'red',
      isArchived: 'false'
    }

    const response = await axios.post(sendOnePhrasePhat, creatingNewPhrase, {
      headers: {
        'x-access-token': token
      }
    })

    const idPhrase = response.data.data._id
    return redirect('/card/' + idPhrase)
  } catch (error) {
    console.error(error.message)
  }
}

export default function Root () {
  const allPhrases = useLoaderData()

  return (
    <div>
      {
        allPhrases != null
          ? (
            <div>
              <NavBarLogIn />
              <CreatePhraseForm />
              {allPhrases.length > 0 ? <></> : <h2>!COME ON ADD YOUR FIST NOTE!</h2>}
            </div>
            )
          : <NavBarLogOut />
      }
      <CardLog allPhrases={allPhrases} />
      <div className='child-display'>
        <Outlet />
      </div>
    </div>
  )
}
