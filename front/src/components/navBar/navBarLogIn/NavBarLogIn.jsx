import { Form } from 'react-router-dom'
import './navBarLogIn.css'

export default function NavBarLogIn () {
  return (
    <div className='navBarLogInContainer'>
      <Form method='post' action='logout'>
        <button type='submit'>
          <span>
            LOGOUT
          </span>
        </button>
      </Form>
    </div>
  )
}
