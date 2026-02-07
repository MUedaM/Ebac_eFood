import CardPerfil from '../../components/CardPerfil'
import { List, ListCont } from './styles'

import pizza from '../../assets/images/Pizza1.png'

const ItalianaList = () => (
  <ListCont>
    <List>
      <CardPerfil
        image={pizza}
        name="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        details="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. Serve: de 2 a 3 pessoas"
        price="60,90"
      />
    </List>
  </ListCont>
)

export default ItalianaList
