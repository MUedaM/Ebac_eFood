import styled from 'styled-components'
import { cores } from '../../styles/global'
import { Link } from 'react-router-dom'

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

  &:hover {
    background-color: ${cores.corTextoSecundario};
    color: ${cores.corTextoPrincipal};
    border-color: ${cores.corTextoPrincipal};
  }
`
