import FoodCard from '../../components/FoodCard'
import { List, ListCont } from './styles'
import japonesa from '../../assets/images/comidas-japonesa.png'
import italiana from '../../assets/images/comidas-italiana.png'

const ListHome = () => (
  <ListCont>
    <List>
      <FoodCard
        destaque
        image={japonesa}
        title="Hioki Sushi"
        category="japonesa"
        score="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        to="/japonesa"
      />
      <FoodCard
        destaque={false}
        image={italiana}
        title="La Dolce Vita Trattoria"
        category="italiana"
        score="4.6"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        to="/italiana"
      />
    </List>
  </ListCont>
)

export default ListHome
