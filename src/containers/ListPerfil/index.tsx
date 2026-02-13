import { useEffect, useState } from 'react'
import CardPerfil from '../../components/CardPerfil'
import { List, ListCont } from './styles'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../../App'
import HeroPerfil from '../../components/HeroPerfil'

export const ListPerfil = () => {
  const { id } = useParams()
  const [perfil, setPerfil] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPerfil(res))
  }, [id])

  const getResume = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 112) + '...'
    }
    return descricao
  }

  if (!perfil) {
    return null
  }

  return (
    <>
      <HeroPerfil
        category={perfil.tipo}
        restaurant={perfil.titulo}
        image={perfil.capa}
      />
      <div className="container">
        <ListCont>
          <List>
            {perfil.cardapio.map((item) => (
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
