import HeaderPerfil from '../../container/HeaderPerfil'
import JaponesaList from '../../container/ListPerfil/JaponesaList'

import japonesa from '../../assets/images/comidas-japonesa.png'

const JaponesaPerfil = () => (
  <>
    <HeaderPerfil
      category="japonesa"
      restaurant="Hioki Sushi"
      capa={japonesa}
    />
    <div className="container">
      <JaponesaList />
    </div>
  </>
)

export default JaponesaPerfil
