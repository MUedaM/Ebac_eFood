import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Overlay } from '../../styles/global'

import Cart from './tabs/cart'
import Delivery from './tabs/delivery'
import Payment from './tabs/payment'
import FooterShop from './tabs/FooterShop'

const AreaBuy = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const [typeForm, setTypeForm] = useState('carrinho')

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartCont className={isOpen ? 'is-open' : ''}>
      <S.SideBar>
        {typeForm === 'carrinho' ? (
          <>
            <Cart onNext={() => setTypeForm('entrega')} onBack={closeCart} />
          </>
        ) : typeForm === 'entrega' ? (
          <>
            <Delivery
              onNext={() => setTypeForm('pagamento')}
              onBack={() => setTypeForm('carrinho')}
            />
          </>
        ) : typeForm === 'pagamento' ? (
          <>
            <Payment
              onNext={() => setTypeForm('')}
              onBack={() => setTypeForm('entrega')}
            />
          </>
        ) : (
          <>
            <S.Title className="margin-bottom">
              Pedido realizado - Order id
            </S.Title>
            <S.Text>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.Text>
            <FooterShop
              ResumeOff
              Inactive={false}
              ValidForm={false}
              onNext={() => {
                closeCart()
                setTypeForm('carrinho')
              }}
              TextNext="Concluir"
            />
          </>
        )}
      </S.SideBar>
      <Overlay
        className={isOpen ? 'is-open' : ''}
        onClick={() => {
          closeCart()
          setTypeForm('carrinho')
        }}
      />
    </S.CartCont>
  )
}

export default AreaBuy
