import { useEffect } from 'react'
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
import { StyleGlobal } from './styles/global'
import Home from './pages/Home'
import Profile from './pages/PagesProfile'
import { Provider } from 'react-redux'
import { store } from './store'

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
    </Provider>
  )
}

const rotas = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:id', element: <Profile /> }
    ]
  }
])

export default rotas
