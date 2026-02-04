import CardHome from '../../components/CardHome'
import { List, ListCont } from './styles'

import japonesa from '../../assets/images/comidas-japonesa.png'
import italiana from '../../assets/images/comidas-italiana.png'

export const restaurantes = [
  {
    id: 0,
    destaque: true,
    image: japonesa,
    restaurant: 'Hioki Sushi',
    category: 'japonesa',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    to: '/japonesa'
  },
  {
    id: 1,
    destaque: false,
    image: italiana,
    restaurant: 'La Dolce Vita Trattoria',
    category: 'italiana',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/italiana'
  },
  {
    id: 3,
    destaque: false,
    image: japonesa,
    restaurant: 'Hioki Sushi',
    category: 'japonesa',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    to: '/japonesa'
  },
  {
    id: 4,
    destaque: false,
    image: italiana,
    restaurant: 'La Dolce Vita Trattoria',
    category: 'italiana',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/italiana'
  },
  {
    id: 5,
    destaque: false,
    image: japonesa,
    restaurant: 'Hioki Sushi',
    category: 'japonesa',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    to: '/japonesa'
  },
  {
    id: 6,
    destaque: false,
    image: italiana,
    restaurant: 'La Dolce Vita Trattoria',
    category: 'italiana',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/italiana'
  }
]

const ListHome = () => (
  <ListCont>
    <List>
      {restaurantes.map((item) => (
        <CardHome
          key={item.id}
          destaque={item.destaque}
          image={item.image}
          restaurant={item.restaurant}
          category={item.category}
          score={item.score}
          description={item.description}
          to={item.to}
        />
      ))}
    </List>
  </ListCont>
)

export default ListHome
