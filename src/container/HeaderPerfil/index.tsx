import logo from '../../assets/logos/efoodlogo.png'
import * as S from './styles'
import back from '../../assets/logos/volta.png'

type Props = {
  category: string
  restaurant: string
  image: string
}

const HeaderPerfil = ({ category, restaurant, image }: Props) => (
  <>
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
    <S.ImgText>
      <div className="container">
        <h3>{category}</h3>
        <h2>{restaurant}</h2>
      </div>
    </S.ImgText>
    <S.HeaderImg src={image} alt="foto de comida" />
  </>
)

export default HeaderPerfil
