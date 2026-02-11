import { useState } from 'react'
import * as S from './styles'
import fechar from '../../assets/logos/fechar.png'

type Props = {
  image: string
  name: string
  description: string
  details: string
  price: number
  portion: string
}

const CardPerfil = ({
  image,
  name,
  description,
  details,
  portion,
  price
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const PriceFormat = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <S.Card>
        <div>
          <S.Capa src={image} alt="foto de comida" />
          <S.Titulo>{name}</S.Titulo>
          <S.Descricao>{description}</S.Descricao>
        </div>
        <S.ButtonMore onClick={() => setModalVisible(true)}>
          Mais detalhes
        </S.ButtonMore>
      </S.Card>
      <S.Modal className={modalVisible && 'visible'}>
        <S.ModalContent className="container">
          <img src={image} alt="foto de comida" />
          <S.Xis onClick={() => setModalVisible(false)}>
            <img src={fechar} alt="icone de fechar popup" />
          </S.Xis>
          <S.Content>
            <div>
              <h4>{name}</h4>
              <p>{details}</p>
            </div>
            <div>
              <p>Serve: de {portion}</p>
              <S.ButtonCarrinho>
                Adicionar ao carrinho - {PriceFormat(price)}
              </S.ButtonCarrinho>
            </div>
          </S.Content>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalVisible(false)}></div>
      </S.Modal>
    </>
  )
}

export default CardPerfil
