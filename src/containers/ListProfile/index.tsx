import { useParams } from 'react-router-dom'
import { useState } from 'react'

import CardProfile from '../../components/CardProfile'
import HeroProfle from '../../components/HeroProfile'
import PopUp from '../../components/PopUp'
import Footer from '../../components/Footer'

import { List, ListCont } from './styles'
import { useGetRestauranteByIdQuery } from '../../services/api'
import Loader from '../../components/Loader'

export const ListProfile = () => {
  const { id } = useParams()
  const { data: perfil } = useGetRestauranteByIdQuery(id as string)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  if (!perfil) {
    return <Loader />
  }

  const getResume = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 102) + '...'
    }
    return descricao
  }

  return (
    <>
      <HeroProfle
        category={perfil.tipo}
        restaurant={perfil.titulo}
        image={perfil.capa}
      />
      <div className="container">
        <ListCont>
          <List>
            {perfil.cardapio.map((item) => (
              <div key={item.id}>
                <CardProfile
                  image={item.foto}
                  name={item.nome}
                  description={getResume(item.descricao)}
                  onClick={() => setSelectedId(item.id)}
                />
                {selectedId === item.id && (
                  <PopUp
                    id={item.id}
                    name={item.nome}
                    image={item.foto}
                    details={item.descricao}
                    portion={item.porcao}
                    price={item.preco}
                    onClose={() => setSelectedId(null)}
                  />
                )}
              </div>
            ))}
          </List>
        </ListCont>
      </div>
      <Footer />
    </>
  )
}

export default ListProfile
