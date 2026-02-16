import * as S from './styles'

type Props = {
  image: string
  name: string
  description: string
  onClick: () => void
}

const CardPerfil = ({ image, name, description, onClick }: Props) => {
  return (
    <>
      <S.Card>
        <div>
          <S.Capa src={image} alt="foto de comida" />
          <S.Titulo>{name}</S.Titulo>
          <S.Descricao>{description}</S.Descricao>
        </div>
        <S.ButtonMore onClick={onClick}>Mais detalhes</S.ButtonMore>
      </S.Card>
    </>
  )
}

export default CardPerfil
