import logo from '../../assets/logos/efoodlogo.png'
import { Carrinho, HeaderCont, Logo, SubTitulo } from './styles'

const HeaderPerfil = () => (
  <HeaderCont>
    <div className="container">
      <SubTitulo>Restaurantes</SubTitulo>
      <Logo>
        <img src={logo} alt="logo da loja virtual" />
      </Logo>
      <Carrinho>0 produtos no carrinho</Carrinho>
    </div>
  </HeaderCont>
)

export default HeaderPerfil
