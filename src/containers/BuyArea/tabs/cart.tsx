import * as S from '../styles'
import ItemCart from '../../../components/ItemCart'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

const Cart = () => {
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
    </>
  )
}

export default Cart
