import HeaderPerfil from '../../container/HeaderPerfil'
import JaponesaList from '../../container/ListPerfil/JaponesaList'

import { restaurantes } from '../../container/ListHome'

const restaurante = restaurantes.filter((r) => r.id === 0)

const JaponesaPerfil = () => (
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
      <JaponesaList />
    </div>
  </>
)

export default JaponesaPerfil
