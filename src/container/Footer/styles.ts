import styled from 'styled-components'
import imagebg from '../../assets/images/imagebg.png'

export const FooterCont = styled.footer`
  background-image: url(${imagebg});
  padding: 40px;
  margin-top: 120px;

  .container {
    display: block;
    text-align: center;
  }
`

export const RedesSociais = styled.div`
  margin: 32px 0 80px;

  a {
    margin: 0 4px;
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  width: 480px;
  margin: 0 auto;
`
