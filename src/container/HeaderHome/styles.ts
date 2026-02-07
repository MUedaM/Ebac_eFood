import styled from 'styled-components'
import imagebg from '../../assets/images/imagebg.png'

export const HeaderCont = styled.header`
  background-image: url(${imagebg});
  padding: 8px 16px;

  .container {
    display: flex;
    justify-content: center;
    margin-top: 64px;
  }
`

export const Titulo = styled.h1`
  display: block;
  text-align: center;
  margin: 144px auto 40px;
  max-width: 539px;
  font-size: 32px;

  @media (max-width: 520px) {
    font-size: 24px;
  }
`
