import { ButtonCarrinho, Card, Descricao, Titulo } from './styles'

type Props = {
  image: string
  name: string
  description: string
}

const CardPerfil = ({ image, name, description }: Props) => (
  <div className="container">
    <Card>
      <img src={image} alt="foto de comida" />
      <Titulo>{name}</Titulo>
      <Descricao>{description}</Descricao>
      <ButtonCarrinho>Adicionar ao carrinho</ButtonCarrinho>
    </Card>
  </div>
)

export default CardPerfil
