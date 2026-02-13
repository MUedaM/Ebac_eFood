import styled from 'styled-components'
import { Action, cores } from '../../styles/global'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corBranco};
  position: relative;
  width: 100%;
  max-width: 472px;

  @media (min-width: 1024px) {
    &:hover {
      ${Action} {
        opacity: 1;
      }
    }
  }
`

export const Capa = styled.img`
  display: block;
  max-height: 216px;
  width: 100%;
  max-width: 472px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`

export const Border = styled.div`
  border: 1px solid ${cores.corTextoPrincipal};
  background-color: ${cores.corBranco};
  border-top: none;
  min-height: 216px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
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

export const ButtonLink = styled(Link)`
  background-color: ${cores.corTextoPrincipal};
  color: ${cores.corTextoSecundario};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  margin-top: 8px;
  cursor: pointer;
  width: 100%;
  max-width: 84px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${cores.corTextoSecundario};
    color: ${cores.corTextoPrincipal};
    border: 1px solid ${cores.corTextoPrincipal};
  }
`
