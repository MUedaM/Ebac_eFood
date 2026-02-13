import { useEffect, useState } from 'react'
import { Restaurante } from '../../App'
import CardHome from '../../components/CardHome'
import { List, ListCont } from './styles'

const ListHome = () => {
  const [home, setHome] = useState<Restaurante[]>([])
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setHome(res))

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getResume = (descricao: string) => {
    if (descricao.length > 196) {
      return descricao.slice(0, 221) + ' ...'
    }
    return descricao
  }
  return (
    <div className="container">
      <ListCont>
        <List>
          {home.map((item) => (
            <CardHome
              key={item.id}
              destaque={item.destacado}
              image={item.capa}
              restaurant={item.titulo}
              category={item.tipo}
              score={item.avaliacao}
              description={
                width > 519 ? item.descricao : getResume(item.descricao)
              }
              to={`/${item.id}`}
            />
          ))}
        </List>
      </ListCont>
    </div>
  )
}

export default ListHome
