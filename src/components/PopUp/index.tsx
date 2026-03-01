import * as S from './styles'
import { Overlay } from '../../styles/global'

import { PriceFormat } from '../../utils'

import fechar from '../../assets/logos/fechar.png'

import { useDispatch } from 'react-redux'
import { addItem, open } from '../../store/reducers/cart'

type Props = {
  id: number
  name: string
  image: string
  details: string
  price: number
  portion: string
  onClose: () => void
}

const PopUp = ({
  id,
  name,
  image,
  details,
  portion,
  price,
  onClose
}: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
    dispatch(
      addItem({
        id,
        name,
        image,
        details,
        price,
        portion
      })
    )
  }

  return (
    <>
      <S.Modal>
        <S.ModalContent className="container">
          <img src={image} alt="foto de comida" />
          <S.Xis onClick={onClose}>
            <img src={fechar} alt="icone de fechar popup" />
          </S.Xis>
          <S.Content>
            <div>
              <h4>{name}</h4>
              <p>{details}</p>
            </div>
            <div>
              <p>Serve: de {portion}</p>
              <S.ButtonCarrinho
                onClick={() => {
                  onClose()
                  openCart()
                }}
              >
                Adicionar ao carrinho - {PriceFormat(price)}
              </S.ButtonCarrinho>
            </div>
          </S.Content>
        </S.ModalContent>
        <Overlay className="visible" onClick={onClose} />
      </S.Modal>
    </>
  )
}

export default PopUp
