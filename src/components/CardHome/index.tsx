import * as S from './styles'
import Tag from '../Tag'
import estrela from '../../assets/logos/estrela.png'
import { useDispatch } from 'react-redux'
import { close } from '../../store/reducers/popUp'

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
}: Props) => {
  const dispatch = useDispatch()

  const closePopUp = () => {
    dispatch(close())
  }

  return (
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
        <S.ButtonLink to={to} onClick={closePopUp}>
          Saiba mais
        </S.ButtonLink>
      </S.Border>
    </S.Card>
  )
}

export default CardHome
