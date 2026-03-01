import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cart from './tabs/Cart'
import Checkout from './tabs/Checkout'

import * as S from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { Overlay } from '../../styles/global'

const AreaBuy = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const [onCart, setOnCart] = useState(true)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartCont className={isOpen ? 'is-open' : ''}>
      <S.SideBar>
        {onCart ? (
          <Cart onNext={() => setOnCart(false)} onBack={closeCart} />
        ) : (
          <Checkout
            onBack={() => setOnCart(true)}
            onNext={() => {
              closeCart()
              setOnCart(true)
            }}
          />
        )}
      </S.SideBar>
      <Overlay
        className={isOpen ? 'is-open' : ''}
        onClick={() => {
          closeCart()
          setOnCart(true)
        }}
      />
    </S.CartCont>
  )
}

export default AreaBuy
