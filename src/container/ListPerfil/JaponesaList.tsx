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
      />
      <CardPerfil
        image={sushi}
        name="Sushi"
        description="Sabor autêntico do Japão em cada peça. Ingredientes frescos, ambiente moderno e pratos que encantam o paladar."
      />
      <CardPerfil
        image={sushi}
        name="Sushi"
        description="Sabor autêntico do Japão em cada peça. Ingredientes frescos, ambiente moderno e pratos que encantam o paladar."
      />
      <CardPerfil
        image={sushi}
        name="Sushi"
        description="Sabor autêntico do Japão em cada peça. Ingredientes frescos, ambiente moderno e pratos que encantam o paladar."
      />
    </List>
  </ListCont>
)

export default JaponesaList
