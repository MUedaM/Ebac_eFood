import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Overlay } from '../../styles/global'

import Cart from './tabs/cart'
import Delivery from './tabs/delivery'
import Payment from './tabs/payment'
import Footer from './tabs/footer'

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
            <Cart />
            <Footer
              ResumeOff={false}
              onNext={() => setTypeForm('entrega')}
              TextNext="Continuar com a entrega"
              onBack={closeCart}
              TextBack="Fechar carrinho"
            />
          </>
        ) : typeForm === 'entrega' ? (
          <>
            <Delivery />
            <Footer
              ResumeOff
              onNext={() => setTypeForm('pagamento')}
              TextNext="Continuar com o pagamento"
              onBack={() => setTypeForm('carrinho')}
              TextBack="Voltar para o carrinho"
            />
          </>
        ) : typeForm === 'pagamento' ? (
          <>
            <Payment />
            <Footer
              ResumeOff={false}
              onNext={() => setTypeForm('')}
              TextNext="Finalizar pagamento"
              onBack={() => setTypeForm('entrega')}
              TextBack="Voltar para a edição de endereço"
            />
          </>
        ) : (
          <>
            <S.Title>Pedido realizado - Order id</S.Title>
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
            <Footer
              ResumeOff
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
