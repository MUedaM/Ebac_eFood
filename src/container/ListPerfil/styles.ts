import styled from 'styled-components'

export const ListCont = styled.div`
  padding-top: 56px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 320px 320px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    grid-template-columns: 320px;
    justify-content: center;
  }
`
