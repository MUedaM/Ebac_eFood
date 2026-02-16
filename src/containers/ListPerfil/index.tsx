import { useState } from 'react'
import CardPerfil from '../../components/CardPerfil'
import { List, ListCont } from './styles'
import { useParams } from 'react-router-dom'
import HeroPerfil from '../../components/HeroPerfil'
import PopUp from '../../components/PopUp'
import { useGetRestauranteByIdQuery } from '../../services/api'

export const ListPerfil = () => {
  const { id } = useParams()
  const { data: perfil } = useGetRestauranteByIdQuery(id as string)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  if (!perfil) {
    return null
  }

  const getResume = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 102) + '...'
    }
    return descricao
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
              <>
                <CardPerfil
                  key={item.id}
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
              </>
            ))}
          </List>
        </ListCont>
      </div>
    </>
  )
}

export default ListPerfil
