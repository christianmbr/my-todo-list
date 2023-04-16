import { redirect } from 'react-router-dom'
import FormSigUp from '../../components/formSigUp/FormSigUp'
import axios from 'axios'

export async function action ({ request }) {
  try {
    const createUserPath = 'http://localhost:5001/api/v1/auth/sigup'
    const newUserValues = Object.fromEntries(await request.formData())

    const tokenNewUser = await axios.post(createUserPath, newUserValues)

    if (!tokenNewUser.data.token) {
      window.alert('The user already exist')
      return redirect('/sigup')
    }

    localStorage.setItem('phraseBook', tokenNewUser.data.token)

    window.alert('¡Welcome!')
    return redirect('/')
  } catch (error) {
    console.log(error.message)
  }
}

export default function Sigup () {
  return <FormSigUp />
}
