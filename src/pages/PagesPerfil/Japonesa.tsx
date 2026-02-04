import HeaderPerfil from '../../container/HeaderPerfil'
import JaponesaList from '../../container/ListPerfil/JaponesaList'

import { restaurantes } from '../../container/ListHome'

const categoria = restaurantes[0].category
const restaurante = restaurantes[0].restaurant
const capa = restaurantes[0].image

const JaponesaPerfil = () => (
  <>
    <HeaderPerfil category={categoria} restaurant={restaurante} cover={capa} />
    <div className="container">
      <JaponesaList />
    </div>
  </>
)

export default JaponesaPerfil
