import styled from 'styled-components'
import imagebg from '../../assets/images/imagebg.png'
import { cores } from '../../styles/global'

export const HeaderCont = styled.header`
  color: ${cores.corTexto};
  background-image: url(${imagebg});
  padding: 8px 16px;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    margin-top: 64px;
  }
`

export const Titulo = styled.h1`
  display: block;
  text-align: center;
  margin: 240px auto 40px;
  max-width: 539px;
  font-size: 32px;
`
