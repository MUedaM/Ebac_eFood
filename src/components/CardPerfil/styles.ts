import styled from 'styled-components'
import { Action, cores } from '../../styles/global'

export const Card = styled.div`
  background-color: ${cores.corTextoPrincipal};
  padding: 8px;
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 100%;
  max-height: 338px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    &:hover {
      ${Action} {
        opacity: 1;
      }
    }
  }

  @media (max-width: 424px) {
    height: 400px;
  }
`

export const Capa = styled.img`
  display: block;
  height: 100%;
  max-height: 168px;
  width: 100%;
  max-width: 304px;
  object-fit: cover;
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

export const ButtonMore = styled.button`
  color: ${cores.corTextoPrincipal};
  background-color: ${cores.corTextoSecundario};
  border: 1px solid transparent;
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
  height: auto;
  padding: 32px;
  position: relative;
  z-index: 1;
  background-color: ${cores.corTextoPrincipal};
  display: flex;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: 768px) {
      display: block;
      margin: 0 auto 16px;
      width: 140px;
      height: 140px;
    }
  }
`

export const Content = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }

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
`

export const ButtonCarrinho = styled.button`
  padding: 4px 8px;
  color: ${cores.corTextoPrincipal};
  background-color: ${cores.corTextoSecundario};
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    color: ${cores.corTextoSecundario};
    background-color: transparent;
    border: 1px solid ${cores.corTextoSecundario};
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
