import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import fechar from '../../assets/logos/fechar.png'
import * as S from './styles'
import { close } from '../../store/reducers/popUp'

type Props = {
  name: string
  image: string
  details: string
  price: number
  portion: string
}

const PopUp = ({ name, image, details, portion, price }: Props) => {
  const { visible } = useSelector((state: RootReducer) => state.popUp)
  const dispatch = useDispatch()

  const closePopUp = () => {
    dispatch(close())
  }

  const PriceFormat = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <S.Modal className={visible ? 'visible' : ''}>
      <S.ModalContent className="container">
        <img src={image} alt="foto de comida" />
        <S.Xis>
          <img onClick={closePopUp} src={fechar} alt="icone de fechar popup" />
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
      <div className="overlay" onClick={closePopUp}></div>
    </S.Modal>
  )
}

export default PopUp
