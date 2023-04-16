import { createBrowserRouter } from 'react-router-dom'

// Components.
import RouteNotFound from './routes/Error/ErrorComponent.jsx'
import Root, { loader as rootLoader, action as actionRoot } from './routes/Root/Root.jsx'
import Login, { action as loginAction } from './routes/Login/Login.jsx'
import { action as logoutAction } from './routes/Logout/Logout.jsx'
import Card, { loader as cardLoader, action as actionDelete } from './routes/Card/Card.jsx'
import Sigup, { action as sigupAction } from './routes/Sigup/Sigup.jsx'

// Router options.
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <RouteNotFound />,
      action: actionRoot,
      loader: rootLoader,
      children: [
        {
          path: '/login',
          element: <Login />,
          action: loginAction
        },
        {
          path: '/sigup',
          element: <Sigup />,
          action: sigupAction
        },
        {
          path: '/logout',
          action: logoutAction
        },
        {
          path: '/card/:phraseId',
          element: <Card />,
          loader: cardLoader,
          action: actionDelete
        }
      ]
    }
  ]
)

export default router
