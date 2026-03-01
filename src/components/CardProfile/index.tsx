import * as S from './styles'

type Props = {
  image: string
  name: string
  description: string
  onClick: () => void
}

const CardProfile = ({ image, name, description, onClick }: Props) => {
  return (
    <>
      <S.Card>
        <div>
          <S.Cover src={image} alt="foto de comida" />
          <S.Title>{name}</S.Title>
          <S.Descricao>{description}</S.Descricao>
        </div>
        <S.ButtonMore onClick={onClick}>Mais detalhes</S.ButtonMore>
      </S.Card>
    </>
  )
}

export default CardProfile
