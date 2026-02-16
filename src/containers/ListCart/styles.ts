import styled from 'styled-components'
import { cores } from '../../styles/global'

export const CartCont = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.corTextoPrincipal};
  z-index: 1;
  padding: 16px 8px;
  max-width: 376px;
  width: 100%;
  position: relative;
`

export const Items = styled.ul`
  overflow-y: auto;
  height: calc(100vh - 155px);
  padding-left: 8px;
  scrollbar-gutter: stable;
  direction: rtl;

  & > * {
    direction: ltr;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${cores.corTextoPrincipal};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${cores.corTextoSecundario};
    border-radius: 4px;

    &:hover {
      background-color: ${cores.corFundoPrincipal};
    }
  }
`

export const Alert = styled.p`
  color: ${cores.corTextoSecundario};
  padding-top: 16px;
  text-align: center;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    color: ${cores.corTextoSecundario};
    font-size: 18px;
  }

  p {
    color: ${cores.corTextoSecundario};
    font-size: 12px;
  }
`

export const Resume = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 16px;

  p {
    color: ${cores.corTextoSecundario};
  }
`

export const Footer = styled.div`
  position: absolute;
  bottom: 16px;
  width: 360px;
`
