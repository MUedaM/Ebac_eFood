import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StyleGlobal } from './styles/global'
import Home from './pages/Home'
import Footer from './container/Footer'
import Perfil from './pages/Perfil'

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
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <StyleGlobal />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
