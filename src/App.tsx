import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
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
        path: '/postcode/:code',
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
