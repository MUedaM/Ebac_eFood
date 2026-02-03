import logo from '../../assets/logos/efoodlogo.png'
import * as S from './styles'
import italiana from '../../assets/images/comidas-italiana.png'

const HeaderPerfil = () => (
  <>
    <S.HeaderCont>
      <div className="container">
        <S.Titulo>
          <S.SubTitulo>Restaurantes</S.SubTitulo>
          <S.Logo>
            <img src={logo} alt="logo da loja virtual" />
          </S.Logo>
          <S.Carrinho>0 produtos no carrinho</S.Carrinho>
        </S.Titulo>
      </div>
    </S.HeaderCont>
    <S.ImgText>
      <div className="container">
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </S.ImgText>
    <S.HeaderImg src={italiana} alt="foto de comida" />
  </>
)

export default HeaderPerfil
