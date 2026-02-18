import { useDispatch, useSelector } from 'react-redux'
import { ButtonMore } from '../../components/CardPerfil/styles'
import * as S from './styles'
import ItemCart from '../../components/ItemCart'
import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Overlay } from '../../styles/global'
import { PriceFormat } from '../../App'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const total = items.reduce((acc, item) => acc + item.price, 0)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartCont className={isOpen ? 'is-open' : ''}>
      <S.SideBar>
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
          <S.Footer>
            <S.Resume className={items.length === 0 ? '' : 'visible'}>
              <div>
                <p>Valor total:</p>
                <p>{PriceFormat(total)}</p>
              </div>
              <ButtonMore>Continuar com a entrega</ButtonMore>
            </S.Resume>
            <ButtonMore onClick={closeCart}>Fechar carrinho</ButtonMore>
          </S.Footer>
        </S.Items>
      </S.SideBar>
      <Overlay className={isOpen ? 'is-open' : ''} onClick={closeCart} />
    </S.CartCont>
  )
}

export default Cart
