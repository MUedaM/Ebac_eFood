import styled from 'styled-components'
import { cores } from '../../styles/global'
import { ButtonMore } from '../../components/CardProfile/styles'

type buttonProps = {
  isActive: boolean
}

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
  height: 80vh;
  padding-left: 8px;
  scrollbar-gutter: stable;
  direction: rtl;

  @media (max-height: 880px) {
    height: 70vh;
  }

  @media (max-height: 600px) {
    height: 60vh;
  }

  @media (max-height: 456px) {
    height: 45vh;
  }

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
  margin-right: 16px;
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
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  div {
    display: none;
    justify-content: space-between;
  }

  p {
    color: ${cores.corTextoSecundario};
  }

  &.visible {
    display: block;

    div {
      display: flex;
    }
  }
`

export const Footer = styled.div`
  position: absolute;
  bottom: 16px;
  width: 360px;

  ${ButtonMore} {
    display: none;

    &.visible {
      display: block;
    }
  }
`

export const Title = styled.h2`
  text-align: center;
  color: ${cores.corTextoSecundario};
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;

  &.margin-bottom {
    margin-bottom: 16px;
  }
`

export const SubTitle = styled.h3`
  color: ${cores.corTextoSecundario};
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;

  &.align-center {
    text-align: center;
  }

  &.margin-bottom {
    margin-bottom: 16px;
  }
`

export const Text = styled.p`
  color: ${cores.corTextoSecundario};
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 24px;
`

export const Input = styled.div`
  display: flex;
  width: auto;

  &.column {
    flex-direction: column;
  }

  &.row {
    flex-direction: row;
    justify-content: flex-end;
    gap: 32px;
  }
`

export const InputInfo = styled.div`
  label {
    color: ${cores.corTextoSecundario};
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin: 8px 0;
  }

  input {
    color: ${cores.corInputText};
    background-color: ${cores.corTextoSecundario};
    border: none;
    font-size: 14px;
    font-weight: bold;
    display: block;
    max-height: 32px;
    width: 100%;
    padding: 8px;

    &:focus {
      outline: none;
    }
  }

  select {
    color: ${cores.corInputText};
    background-color: ${cores.corTextoSecundario};
    height: 100%;
    max-height: 32px;
  }

  &.half {
    flex: 1;
  }

  &.one-and-half {
    flex: 3;
  }
`

export const PayMethod = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 16px;
`

export const ButtonPayMethod = styled(ButtonMore)<buttonProps>`
  display: flex;
  width: auto;
  margin: 0;
  background-color: ${(props) =>
    props.isActive ? cores.corTextoPrincipal : cores.corFundoPrincipal};
  border: ${(props) =>
    props.isActive ? `1px solid ${cores.corTextoSecundario}` : 'none'};

  img {
    max-height: 16px;
    margin-left: 8px;
  }

  p {
    align-items: center;
    margin: 0 8px;
    color: ${(props) =>
      props.isActive ? cores.corTextoSecundario : cores.corTextoPrincipal};
  }

  &:hover {
    background-color: ${cores.corTextoPrincipal};
    border: 1px solid ${cores.corTextoSecundario};

    p {
      color: ${cores.corTextoSecundario};
    }
  }
`

export const CodeCont = styled.div`
  display: block;
  text-align: center;

  img {
    height: 250px;
    widht: auto;
  }
`
