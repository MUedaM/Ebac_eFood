import * as S from './styles'
import Tag from '../Tag'
import estrela from '../../assets/logos/estrela.png'

type Props = {
  destaque: boolean

  image: string
  restaurant: string
  category: string
  score: number
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
    <S.Capa src={image} alt="imagem de comida" />
    <S.Border>
      <div>
        <S.Titulo>
          <p>{restaurant}</p>
          <div>
            <span>{score}</span>
            <img src={estrela} alt="logo de estrela" />
          </div>
        </S.Titulo>
        <S.Descricao>{description}</S.Descricao>
      </div>
      <S.ButtonLink to={to}>Saiba mais</S.ButtonLink>
    </S.Border>
  </S.Card>
)

export default CardHome
