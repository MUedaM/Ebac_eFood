import logo from '../../assets/logos/efoodlogo.png'
import instagram from '../../assets/logos/instagram.png'
import facebook from '../../assets/logos/facebook.png'
import twitter from '../../assets/logos/twitter.png'
import { FooterCont, FooterText, Logo, RedesSociais } from './styles'

const Footer = () => (
  <FooterCont>
    <div className="container">
      <Logo to="/">
        <img src={logo} alt="logo da loja virtual" />
      </Logo>
      <RedesSociais>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="logo do instagram" />
        </a>
        <a href="https://pt-br.facebook.com/">
          <img src={facebook} alt="logo do facebook" />
        </a>
        <a href="https://x.com/">
          <img src={twitter} alt="logo do twitter" />
        </a>
      </RedesSociais>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </FooterText>
    </div>
  </FooterCont>
)

export default Footer
