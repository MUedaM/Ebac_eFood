import logo from '../../assets/logos/efoodlogo.png'
import * as S from './styles'
import back from '../../assets/logos/volta.png'

const HeaderPerfil = () => (
  <S.HeaderCont>
    <div className="container">
      <S.Titulo>
        <S.Voltar to="/">
          <img src={back} />
          <p>Restaurantes</p>
        </S.Voltar>
        <S.Logo to="/">
          <img src={logo} alt="logo da loja virtual" />
        </S.Logo>
        <S.Carrinho>0 produtos no carrinho</S.Carrinho>
      </S.Titulo>
    </div>
  </S.HeaderCont>
)

export default HeaderPerfil
