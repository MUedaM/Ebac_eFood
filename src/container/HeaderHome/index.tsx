import { HeaderCont, Titulo } from './styles'
import logo from '../../assets/logos/efoodlogo.png'

const HeaderHome = () => (
  <HeaderCont>
    <div className="container">
      <img src={logo} alt="logo da loja virtual" />
    </div>
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </HeaderCont>
)

export default HeaderHome
