import styled from 'styled-components'
import { cores } from '../../styles/global'

export const ImgText = styled.div`
  position: absolute;
  background: rgb(0, 0, 0, 0.5);
  height: 100%;
  max-height: 280px;
  width: 100%;
  padding: 25px 0 32px;

  @media (max-width: 605px) {
    height: auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    @media (max-width: 1120px) {
      width: 80%;
    }

    @media (max-width: 1025px) {
      width: 80%;
    }

    @media (max-width: 605px) {
      flex-direction: row;
    }
  }

  h3 {
    color: ${cores.corBranco};
    font-size: 32px;
    font-weight: 100;

    @media (max-width: 604px) {
      font-size: 20px;
    }
  }

  h2 {
    color: ${cores.corBranco};
    font-size: 32px;
    font-weight: 900;

    @media (max-width: 604px) {
      font-size: 20px;
    }
  }
`

export const HeroImg = styled.img`
  display: block;
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  position: relative;
  z-index: -1;
`
