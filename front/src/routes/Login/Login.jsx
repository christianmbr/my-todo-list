import { redirect } from 'react-router-dom'
import axios from 'axios'
import FormLogIn from '../../components/formLogIn/FormLogIn'

export async function action ({ request }) {
  const path = 'http://localhost:5001/api/v1/auth/sigin'
  const formData = await request.formData()
  const valuesToSendFromForm = Object.fromEntries(formData)

  const userToFind = {
    userNickName: valuesToSendFromForm.name,
    userPassword: valuesToSendFromForm.password
  }

  const userFound = await axios.post(path, userToFind)

  if (userFound.data.status === 2) {
    window.alert('User not found')
    return null
  }

  localStorage.setItem('phraseBook', userFound.data.token)
  window.alert('Wellcome back!')
  return redirect('/')
}

export default function Login () {
  return <FormLogIn />
}
