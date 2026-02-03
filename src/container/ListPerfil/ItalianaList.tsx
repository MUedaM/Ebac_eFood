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
      />
      <CardPerfil
        image={pizza}
        name="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
      <CardPerfil
        image={pizza}
        name="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
      <CardPerfil
        image={pizza}
        name="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
    </List>
  </ListCont>
)

export default ItalianaList
