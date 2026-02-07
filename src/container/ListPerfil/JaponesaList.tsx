import CardPerfil from '../../components/CardPerfil'
import { List, ListCont } from './styles'

import sushi from '../../assets/images/Sushi1.png'

const JaponesaList = () => (
  <ListCont>
    <List>
      <CardPerfil
        image={sushi}
        name="Sushi"
        description="Sabor autêntico do Japão em cada peça. Ingredientes frescos, ambiente moderno e pratos que encantam o paladar."
        details="No Japão, o sushi é considerado uma arte. A escolha do peixe e o corte preciso são fundamentais para garantir a experiência perfeita. O salmão, apesar de não ser tradicionalmente usado no Japão até meados do século XX, tornou-se um dos favoritos em restaurantes japoneses ao redor do mundo. Serve: de 2 a 3 pessoas"
        price="60,90"
      />
    </List>
  </ListCont>
)

export default JaponesaList
