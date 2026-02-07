import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corTextoPrincipal: '#E66767',
  corTextoSecundario: '#FFEBD9',
  corBranco: '#FFFFFF',
  corFundoPrincipal: '#FFF8F2'
}

export const StyleGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTextoPrincipal}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${cores.corFundoPrincipal};
    overflow-x: hidden;
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
    color: ${cores.corBranco};
    margin-top: 8px;

    @media (max-width: 520px) {
      font-size: 10px;
      padding: 4px 0;
    }
  }
`
