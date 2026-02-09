import { useEffect, useState } from 'react'
import ListHome from '../../containers/ListHome'
import { Restaurante } from '../../App'
import Footer from '../../components/Footer'
import HeaderHome from '../../components/HeaderHome'

const Home = () => {
  const [home, setHome] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setHome(res))
  })

  return (
    <>
      <HeaderHome />
      <ListHome restaurantes={home} />
      <Footer />
    </>
  )
}

export default Home
