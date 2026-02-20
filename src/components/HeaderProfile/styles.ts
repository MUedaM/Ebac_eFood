import styled from 'styled-components'
import imagebg from '../../assets/images/imagebg.png'
import { Link } from 'react-router-dom'

export const HeaderCont = styled.header`
  background-image: url(${imagebg});
  padding: 64px 0;
`

export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    display: block;
  }
`

export const Voltar = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  text-underline-offset: 8px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  img {
    height: 14px;
    margin-right: 8px;
  }

  p {
    align-items: center;
  }

  @media (max-width: 520px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`

export const Logo = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 520px) {
    padding: 24px 0;
  }
`

export const Carrinho = styled.p`
  font-size: 18px;
  font-weight: 900;
  flex: 1;
  text-align: right;
  cursor: pointer;
  text-underline-offset: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    height: 16px;
    margin-left: 8px;
  }

  @media (max-width: 520px) {
    justify-content: center;
  }

  &:hover {
    text-decoration: underline;
  }
`
