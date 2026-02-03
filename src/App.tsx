import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation
} from 'react-router-dom'
import { StyleGlobal } from './styles/global'
import Home from './pages/Home'
import Footer from './container/Footer'
import ItalianaPerfil from './pages/PagesPerfil/Italiana'
import { useEffect } from 'react'
import JaponesaPerfil from './pages/PagesPerfil/Japonesa'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Layout() {
  return (
    <>
      <StyleGlobal />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

const rotas = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/japonesa', element: <JaponesaPerfil /> },
      { path: '/italiana', element: <ItalianaPerfil /> }
    ]
  }
])

function App() {
  return <RouterProvider router={rotas} />
}

export default App
