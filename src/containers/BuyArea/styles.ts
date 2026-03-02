import styled from 'styled-components'
import { colors } from '../../styles/global'
import { ButtonMore } from '../../components/CardProfile/styles'

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
  background-color: ${colors.colorTextPrimary};
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
    background-color: ${colors.colorTextPrimary};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.colorTextSecundary};
    border-radius: 4px;

    &:hover {
      background-color: ${colors.colorBackground};
    }
  }
`

export const Alert = styled.p`
  color: ${colors.colorTextSecundary};
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
    color: ${colors.colorTextSecundary};
    font-size: 18px;
  }

  p {
    color: ${colors.colorTextSecundary};
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
    color: ${colors.colorTextSecundary};
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
  color: ${colors.colorTextSecundary};
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;

  &.margin-bottom {
    margin-bottom: 16px;
  }
`

export const SubTitle = styled.h3`
  color: ${colors.colorTextSecundary};
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
  color: ${colors.colorTextSecundary};
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 24px;
`

export const Form = styled.form`
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

  small {
    color: ${colors.colorTextSecundary};
  }
`

export const FormInfo = styled.div`
  label {
    color: ${colors.colorTextSecundary};
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin: 8px 0;
  }

  input {
    color: ${colors.corInputText};
    background-color: ${colors.colorTextSecundary};
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
    color: ${colors.corInputText};
    background-color: ${colors.colorTextSecundary};
    height: 100%;
    max-height: 32px;

    &:focus {
      outline: none;
    }
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

export const ButtonPayMethod = styled(ButtonMore)<{ selected?: boolean }>`
  display: flex;
  width: auto;
  margin: 0;
  background-color: ${(props) =>
    props.selected ? colors.colorTextPrimary : colors.colorBackground};
  border: ${(props) =>
    props.selected ? `1px solid ${colors.colorTextSecundary}` : 'none'};

  img {
    max-height: 16px;
    margin-left: 8px;
  }

  p {
    align-items: center;
    margin: 0 8px;
    color: ${(props) =>
      props.selected ? colors.colorTextSecundary : colors.colorTextPrimary};
  }

  &:hover {
    background-color: ${colors.colorTextPrimary};
    border: 1px solid ${colors.colorTextSecundary};

    p {
      color: ${colors.colorTextSecundary};
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
