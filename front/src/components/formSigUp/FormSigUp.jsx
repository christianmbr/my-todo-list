import { Form } from 'react-router-dom'
import './formSigUp.css'

export default function FormSigUp () {
  return (
    <Form method='post' className='form-sig-up'>
      <h2>SIGUP</h2>
      <input type='text' placeholder='USER NAME' name='userNickName' required />
      <input type='mail' placeholder='EMAIL' name='userEmail' required />
      <input type='text' placeholder='NAME' name='userName' required />
      <input type='text' placeholder='LAST NAME' name='userLastName' required />
      <input type='password' placeholder='PASSWORD' name='userPassword' required />
      <button type='submit'>
        <span>
          SIGUP
        </span>
      </button>
    </Form>
  )
}
