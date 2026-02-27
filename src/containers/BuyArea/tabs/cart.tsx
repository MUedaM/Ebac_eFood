import * as S from '../styles'
import ItemCart from '../../../components/ItemCart'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import FooterShop from './FooterShop'

type Props = {
  onNext: () => void
  onBack: () => void
}

const Cart = ({ onNext, onBack }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <S.Title>Carrinho de compras</S.Title>
      <S.Items>
        {items.length === 0 ? (
          <S.Alert>Nenhum produto foi adicionada ao carrinho!</S.Alert>
        ) : (
          items.map((item) => (
            <ItemCart
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        )}
      </S.Items>
      <FooterShop
        Inactive={false}
        ResumeOff={false}
        onNext={onNext}
        TextNext="Continuar com a entrega"
        onBack={onBack}
        TextBack="Fechar carrinho"
      />
    </>
  )
}

export default Cart
