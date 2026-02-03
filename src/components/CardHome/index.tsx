import estrela from '../../assets/logos/estrela.png'
import Tag from '../Tag'
import { Border, ButtonLink, Card, Descricao, Info, Titulo } from './styles'

type Props = {
  destaque: boolean

  image: string
  title: string
  category: string
  score: string
  description: string
  to: string
}

const CardHome = ({
  destaque,
  image,
  title,
  category,
  score,
  description,
  to
}: Props) => (
  <Card>
    {destaque ? (
      <Info>
        <Tag>Destaque da semana</Tag>
        <Tag>{category}</Tag>
      </Info>
    ) : (
      <Info>
        <Tag>{category}</Tag>
      </Info>
    )}
    <img src={image} alt="imagem de comida" />
    <Border>
      <Titulo>
        <h3>{title}</h3>
        <div>
          <span>{score}</span>
          <img src={estrela} alt="logo de estrela" />
        </div>
      </Titulo>
      <Descricao>{description}</Descricao>
      <ButtonLink to={to}>Saiba mais</ButtonLink>
    </Border>
  </Card>
)

export default CardHome
