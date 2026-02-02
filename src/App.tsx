import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StyleGlobal } from './styles/global'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/japonesa',
    element: <h2>Lista de comida japonesa</h2>
  },
  {
    path: '/italiana',
    element: <h2>Lista de comida italiana</h2>
  }
])

function App() {
  return (
    <>
      <StyleGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
