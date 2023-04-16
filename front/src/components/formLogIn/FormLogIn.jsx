import './formLogIn.css'
import { Form, Link } from 'react-router-dom'

export default function FormLogIn () {
  return (
    <Form className='form-logIn' method='post'>
      <h2>LOGIN</h2>
      <input type='text' name='name' placeholder='USER NAME' />
      <input type='password' name='password' placeholder='PASSWORD' />
      <Link to='/sigup' style={{ color: 'white' }}>I have no account</Link>
      <button type='submit'>
        <span>
          Login
        </span>
      </button>
    </Form>
  )
}
