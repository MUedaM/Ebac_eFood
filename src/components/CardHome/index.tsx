import estrela from '../../assets/logos/estrela.png'
import Tag from '../Tag'
import * as S from './styles'

import mais from '../../assets/logos/mais.png'

type Props = {
  destaque: boolean

  image: string
  restaurant: string
  category: string
  score: string
  description: string
  to: string
}

const CardHome = ({
  destaque,
  image,
  restaurant,
  category,
  score,
  description,
  to
}: Props) => (
  <S.Card>
    {destaque ? (
      <S.Info>
        <Tag>Destaque da semana</Tag>
        <Tag>{category}</Tag>
      </S.Info>
    ) : (
      <S.Info>
        <Tag>{category}</Tag>
      </S.Info>
    )}
    <S.AreaLink to={to}>
      <div>
        <S.Capa src={image} alt="imagem de comida" />
        <S.ActionHome>
          <img src={mais} alt="Para mais detalhes" />
          <p>Clique aqui para saber mais!</p>
        </S.ActionHome>
      </div>
    </S.AreaLink>
    <S.Border>
      <S.Titulo>
        <p>{restaurant}</p>
        <div>
          <span>{score}</span>
          <img src={estrela} alt="logo de estrela" />
        </div>
      </S.Titulo>
      <S.Descricao>{description}</S.Descricao>
    </S.Border>
  </S.Card>
)

export default CardHome
