import logo from '../../assets/logos/efoodlogo.png'
import {
  Carrinho,
  HeaderCont,
  HeaderImg,
  ImgText,
  Logo,
  SubTitulo,
  Titulo
} from './styles'
import italiana from '../../assets/images/comidas-italiana.png'

const HeaderPerfil = () => (
  <>
    <HeaderCont>
      <div className="container">
        <Titulo>
          <SubTitulo>Restaurantes</SubTitulo>
          <Logo>
            <img src={logo} alt="logo da loja virtual" />
          </Logo>
          <Carrinho>0 produtos no carrinho</Carrinho>
        </Titulo>
      </div>
    </HeaderCont>
    <ImgText>
      <div className="container">
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </ImgText>
    <HeaderImg src={italiana} alt="foto de comida" />
  </>
)

export default HeaderPerfil
