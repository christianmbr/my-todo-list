import { redirect } from 'react-router-dom'

export function action () {
  localStorage.clear('phraseBook')
  window.alert('!You are logged out!\nSee you soon!')
  return redirect('/login')
}
