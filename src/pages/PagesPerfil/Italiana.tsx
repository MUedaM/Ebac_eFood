import HeaderPerfil from '../../container/HeaderPerfil'
import ItalianaList from '../../container/ListPerfil/ItalianaList'

import italiana from '../../assets/images/comidas-italiana.png'

const ItalianaPerfil = () => (
  <>
    <HeaderPerfil
      category="italiana"
      restaurant="La Dolce Vita Trattoria"
      capa={italiana}
    />
    <div className="container">
      <ItalianaList />
    </div>
  </>
)

export default ItalianaPerfil
