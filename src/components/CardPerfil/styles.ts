import styled from 'styled-components'
import { cores } from '../../styles/global'

export const Card = styled.div`
  background-color: ${cores.corTextoPrincipal};
  padding: 8px;

  img {
    max-height: 168px;
    width: auto;
  }
`
export const Titulo = styled.h4`
  color: ${cores.corTextoSecundario};
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`
export const Descricao = styled.p`
  color: ${cores.corTextoSecundario};
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
`

export const ButtonCarrinho = styled.button`
  color: ${cores.corTextoPrincipal};
  background-color: ${cores.corTextoSecundario};
  border-color: transparent;
  padding: 4px;
  display: block;
  width: 100%;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    color: ${cores.corTextoSecundario};
    background-color: ${cores.corTextoPrincipal};
    border: 1px solid ${cores.corTextoSecundario};
  }
`
