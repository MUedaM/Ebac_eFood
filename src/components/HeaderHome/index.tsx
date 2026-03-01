import { HeaderCont, Title } from './styles'

import logo from '../../assets/logos/efoodlogo.png'

const HeaderHome = () => (
  <HeaderCont>
    <div className="container">
      <img src={logo} alt="logo da loja virtual" />
    </div>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderCont>
)

export default HeaderHome
