import { useEffect, useState } from 'react'
import { Restaurante } from '../../App'
import CardHome from '../../components/CardHome'
import { List, ListCont } from './styles'
import HeaderHome from '../../components/HeaderHome'

export type Props = {
  restaurantes: Restaurante[]
}

const ListHome = ({ restaurantes }: Props) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getResume = (descricao: string) => {
    if (descricao.length > 196) {
      return descricao.slice(0, 196) + ' ...'
    }
    return descricao
  }
  return (
    <>
      <HeaderHome />
      <div className="container">
        <ListCont>
          <List>
            {restaurantes.map((item) => (
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
    </>
  )
}

export default ListHome
