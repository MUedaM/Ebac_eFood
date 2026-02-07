import styled from 'styled-components'
import { Action, cores } from '../../styles/global'

export const Card = styled.div`
  background-color: ${cores.corTextoPrincipal};
  padding: 8px;
  cursor: pointer;
  position: relative;

  @media (min-width: 1024px) {
    &:hover {
      ${Action} {
        opacity: 1;
      }
    }
  }
`

export const ActionPerfil = styled(Action)`
  @media (max-width: 520px) {
    padding: 4px 0 8px;

    img {
      display: none;
    }
  }
`

export const Item = styled.div`
  position: relative;
`

export const Border = styled.div`
  background-color: ${cores.corTextoPrincipal}
  position: sticky;
  z-index: 1;
`

export const Capa = styled.img`
  display: block;
  height: auto;
  width: 100%;
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
  margin: 8px 0;
  line-height: 22px;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  max-height: 344px;
  padding: 32px;
  position: relative;
  z-index: 1;
  background-color: ${cores.corTextoPrincipal};
  display: flex;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const Content = styled.div`
  margin-left: 24px;

  h4 {
    color: ${cores.corBranco};
    font-size: 18px;
    font-weight: 900;
  }

  p {
    color: ${cores.corBranco};
    margin: 16px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    padding: 4px 8px;
    color: ${cores.corTextoPrincipal};
    background-color: ${cores.corTextoSecundario};
    border-color: transparent;
    cursor: pointer;

    &:hover {
      color: ${cores.corTextoSecundario};
      background-color: transparent;
      border: 1px solid ${cores.corTextoSecundario};
    }
  }
`

export const Xis = styled.div`
  padding: 16px;
  position: absolute;
  right: 8px;
  top: 8px;

  img {
    max-height: 16px;
    max-width: 16px;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
