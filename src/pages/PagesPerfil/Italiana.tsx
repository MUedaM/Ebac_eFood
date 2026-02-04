import HeaderPerfil from '../../container/HeaderPerfil'
import ItalianaList from '../../container/ListPerfil/ItalianaList'

import { restaurantes } from '../../container/ListHome'

const categoria = restaurantes[1].category
const restaurante = restaurantes[1].restaurant
const capa = restaurantes[1].image

const ItalianaPerfil = () => (
  <>
    <HeaderPerfil category={categoria} restaurant={restaurante} cover={capa} />
    <div className="container">
      <ItalianaList />
    </div>
  </>
)

export default ItalianaPerfil
