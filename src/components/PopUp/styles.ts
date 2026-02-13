import styled from 'styled-components'
import { cores } from '../../styles/global'

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
    background-color: rgba(0, 0, 0, 0.3);
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
  transition: all 0.3s ease;

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
  cursor: pointer;

  img {
    max-height: 16px;
    max-width: 16px;
    position: absolute;
    right: 8px;
    top: 8px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
