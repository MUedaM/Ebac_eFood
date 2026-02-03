import styled from 'styled-components'
import imagebg from '../../assets/images/imagebg.png'
import { cores } from '../../styles/global'
import { Link } from 'react-router-dom'

export const HeaderCont = styled.header`
  background-image: url(${imagebg});
  padding: 64px 0;
`

export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Voltar = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  text-underline-offset: 8px;

  &:hover {
    text-decoration: underline;
  }
`

export const Logo = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

export const Carrinho = styled.p`
  font-size: 18px;
  font-weight: 900;
  flex: 1;
  text-align: right;
`

export const ImgText = styled.div`
  position: absolute;
  background: rgb(0, 0, 0, 0.5);
  height: 280px;
  width: 100%;
  padding: 25px 0 32px;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  h3 {
    color: ${cores.corBranco};
    font-size: 32px;
    font-weight: 100;
  }

  h2 {
    color: ${cores.corBranco};
    font-size: 32px;
    font-weight: 900;
  }
`

export const HeaderImg = styled.img`
  display: block;
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  position: relative;
  z-index: -1;
`
