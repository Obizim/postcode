import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Postcode from './pages/Postcode'

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home /> 
      },
      {
        path: '/:postcode',
        element: <Postcode />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
