import HeaderPerfil from '../../container/HeaderPerfil'
import ItalianaList from '../../container/ListPerfil/ItalianaList'

import { restaurantes } from '../../container/ListHome'

const restaurante = restaurantes.filter((r) => r.id === 1)

const ItalianaPerfil = () => (
  <>
    {restaurante.map((item) => (
      <HeaderPerfil
        key={item.id}
        category={item.category}
        restaurant={item.restaurant}
        image={item.image}
      />
    ))}
    <div className="container">
      <ItalianaList />
    </div>
  </>
)

export default ItalianaPerfil
