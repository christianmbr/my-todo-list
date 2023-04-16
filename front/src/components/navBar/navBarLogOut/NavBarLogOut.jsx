import { Link } from 'react-router-dom'
import './NavBarLogOut.css'

export default function NavBarLogOut () {
  return (
    <div className='nav-bar-log-out'>
      <button>
        <span>
          <Link to='/login'>LOGIN</Link>
        </span>
      </button>
      <button>
        <span>
          <Link to='/sigup'>SIGUP</Link>
        </span>
      </button>
    </div>
  )
}
