import { useEffect } from 'react'
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
import { StyleGlobal } from './styles/global'
import Home from './pages/Home'
import Perfil from './pages/PagesPerfil'
import { Provider } from 'react-redux'
import { store } from './store'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Layout() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </Provider>
  )
}

const rotas = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:id', element: <Perfil /> }
    ]
  }
])

export default rotas
