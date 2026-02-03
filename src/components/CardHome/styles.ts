import styled from 'styled-components'
import { cores } from '../../styles/global'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corBranco};
  position: relative;

  img {
    display: block;
  }
`

export const Border = styled.div`
  border: 1px solid ${cores.corTextoPrincipal};
  border-top: none;
  padding: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  div {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
`

export const Info = styled.div`
  position: absolute;
  border-color: transparent;
  right: 0;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.corTextoPrincipal};
  color: ${cores.corTextoSecundario};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
  border-color: transparent;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${cores.corTextoSecundario};
    color: ${cores.corTextoPrincipal};
    border: 1px solid ${cores.corTextoPrincipal};
  }
`
