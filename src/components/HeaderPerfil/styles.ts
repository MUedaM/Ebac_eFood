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

  @media (max-width: 1120px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 1025px) {
    width: 80%;
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

  @media (max-width: 520px) {
    text-align: center;
  }
`

export const ImgText = styled.div`
  position: absolute;
  background: rgb(0, 0, 0, 0.5);
  height: 100%;
  max-height: 280px;
  width: 100%;
  padding: 25px 0 32px;

  @media (max-width: 605px) {
    height: auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    @media (max-width: 1120px) {
      width: 80%;
    }

    @media (max-width: 1025px) {
      width: 80%;
    }

    @media (max-width: 605px) {
      flex-direction: row;
    }
  }

  h3 {
    color: ${cores.corBranco};
    font-size: 32px;
    font-weight: 100;

    @media (max-width: 604px) {
      font-size: 20px;
    }
  }

  h2 {
    color: ${cores.corBranco};
    font-size: 32px;
    font-weight: 900;

    @media (max-width: 604px) {
      font-size: 20px;
    }
  }
`

export const HeaderImg = styled.img`
  display: block;
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  position: relative;
  z-index: -1;

  @media (max-width: 608px) {
    max-height: 100%;
  }
`
