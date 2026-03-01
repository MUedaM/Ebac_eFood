import * as S from './styles'

import logo from '../../assets/logos/efoodlogo.png'
import back from '../../assets/logos/volta.png'
import carrinho from '../../assets/logos/carrinho.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderProfile = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderCont>
      <div className="container">
        <S.Title>
          <S.Voltar to="/">
            <img src={back} />
            <p>Restaurantes</p>
          </S.Voltar>
          <S.Logo to="/">
            <img src={logo} alt="logo da loja virtual" />
          </S.Logo>
          <S.Carrinho onClick={openCart}>
            <p>{items.length} produtos no carrinho</p>
            <img src={carrinho} alt="logo de carrinho" />
          </S.Carrinho>
        </S.Title>
      </div>
    </S.HeaderCont>
  )
}

export default HeaderProfile
