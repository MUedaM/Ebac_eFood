import styled from 'styled-components'
import { Action, cores } from '../../styles/global'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corBranco};
  position: relative;

  @media (min-width: 1024px) {
    &:hover {
      ${Action} {
        opacity: 1;
      }
    }
  }
`

export const ActionHome = styled(Action)`
  justify-content: flex-start;
  padding-top: 85px;

  @media (max-width: 520px) {
    padding: 8px 0;
    justify-content: flex-end;
  }
`

export const Capa = styled.img`
  display: block;

  @media (max-width: 520px) {
    max-width: 236px;
    height: auto;
  }
`

export const Border = styled.div`
  border: 1px solid ${cores.corTextoPrincipal};
  background-color: ${cores.corBranco};
  border-top: none;
  padding: 8px;
  position: sticky;
  z-index: 1;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: 520px) {
    font-size: 14px;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 8px;

    @media (max-width: 520px) {
      font-size: 14px;
    }
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
  line-height: 22px;

  @media (max-width: 520px) {
    font-size: 12px;
  }
`

export const Info = styled.div`
  position: absolute;
  border-color: transparent;
  right: 0;

  @media (max-width: 520px) {
    position: sticky;
    display: flex;
    justify-content: flex-end;
    background-color: ${cores.corFundoPrincipal};
    z-index: 2;
  }
`

export const AreaLink = styled(Link)``
