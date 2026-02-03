import pizza from '../../assets/images/Pizza1.png'
import { ButtonCarrinho, Card, Descricao, Titulo } from './styles'

const CardPerfil = () => (
  <div className="container">
    <Card>
      <img src={pizza} alt="foto de comida" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <ButtonCarrinho>Adicionar ao carrinho</ButtonCarrinho>
    </Card>
  </div>
)

export default CardPerfil
