import './createPhraseForm.css'
import { Form } from 'react-router-dom'

export default function CreatePhraseForm () {
  return (
    <div>
      <Form method='post' action='/' className='createPhraseForm'>
        <input type='text' name='phrase' placeholder='Inserte a new phrase' />
        <div className='botosss'>
          <button type='submit'>
            <span>
              CREATE
            </span>
          </button>
        </div>
      </Form>
    </div>
  )
}
