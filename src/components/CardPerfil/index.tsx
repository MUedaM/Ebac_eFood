import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/popUp'
import * as S from './styles'

type Props = {
  image: string
  name: string
  description: string
}

const CardPerfil = ({ image, name, description }: Props) => {
  const dispatch = useDispatch()

  const openPopUp = () => {
    dispatch(open())
  }

  return (
    <>
      <S.Card>
        <div>
          <S.Capa src={image} alt="foto de comida" />
          <S.Titulo>{name}</S.Titulo>
          <S.Descricao>{description}</S.Descricao>
        </div>
        <S.ButtonMore onClick={openPopUp}>Mais detalhes</S.ButtonMore>
      </S.Card>
    </>
  )
}

export default CardPerfil
