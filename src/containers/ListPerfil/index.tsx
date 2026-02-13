import { useEffect, useState } from 'react'
import CardPerfil from '../../components/CardPerfil'
import { List, ListCont } from './styles'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../../App'
import HeroPerfil from '../../components/HeroPerfil'

export const ListPerfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return null
  }

  const getResume = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 112) + '...'
    }
    return descricao
  }

  return (
    <>
      <HeroPerfil
        category={restaurante.tipo}
        restaurant={restaurante.titulo}
        image={restaurante.capa}
      />
      <div className="container">
        <ListCont>
          <List>
            {restaurante.cardapio.map((item) => (
              <CardPerfil
                key={item.id}
                image={item.foto}
                name={item.nome}
                description={getResume(item.descricao)}
                details={item.descricao}
                portion={item.porcao}
                price={item.preco}
              />
            ))}
          </List>
        </ListCont>
      </div>
    </>
  )
}

export default ListPerfil
