import * as S from './styles'
import carrinho from '../../assets/logos/carrinho.png'
import fechar from '../../assets/logos/fechar.png'
import { useState } from 'react'

type Props = {
  image: string
  name: string
  description: string
  details: string
  price: string
}

const CardPerfil = ({ image, name, description, details, price }: Props) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <div className="container">
        <S.Card>
          <S.Item>
            <S.Capa src={image} alt="foto de comida" />
            <S.ActionPerfil onClick={() => setModalVisible(true)}>
              <img src={carrinho} alt="Clique para ir à compra" />
              <p>Clique aqui para adicionar ao carrinho!</p>
            </S.ActionPerfil>
          </S.Item>
          <S.Border>
            <S.Titulo>{name}</S.Titulo>
            <S.Descricao>{description}</S.Descricao>
          </S.Border>
        </S.Card>
      </div>
      <S.Modal className={modalVisible && 'visible'}>
        <S.ModalContent className="container">
          <img src={image} alt="foto de comida" />
          <S.Xis>
            <img
              src={fechar}
              alt="icone de fechar popup"
              onClick={() => setModalVisible(false)}
            />
          </S.Xis>
          <S.Content>
            <h4>{name}</h4>
            <p>{details}</p>
            <button>Adicionar ao carrinho - R$ {price}</button>
          </S.Content>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalVisible(false)}></div>
      </S.Modal>
    </>
  )
}

export default CardPerfil
