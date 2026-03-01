import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  colorTextPrimary: '#E66767',
  colorTextSecundary: '#FFEBD9',
  colorBackground: '#FFF8F2',
  colorWhite: '#FFFFFF',
  colorBlack: '#000000',
  corInputText: '#4B4B4B'
}

export const StyleGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${colors.colorTextPrimary}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 520px) {
      width: 80%;
    }
  }

  body {
    background-color: ${colors.colorBackground};
    overflow-x: hidden;
  }

  .maxHeight {
    display: flex;
    flex-direction: column;
  }

`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1023px) {
    opacity: 1;
  }

  @media (max-width: 520px) {
    opacity: 1;
    height: auto;
  }

  img {
    max-height: 32px;
    width: auto;
  }

  p {
    color: ${colors.colorWhite};
    margin-top: 8px;

    @media (max-width: 520px) {
      font-size: 10px;
      padding: 4px 0;
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.colorBlack};
  opacity: 0.8;
  display: none;

  &.visible {
    display: block;
  }

  &.is-open {
    display: block;
  }
`
