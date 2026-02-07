import styled from 'styled-components'

export const ListCont = styled.div`
  padding-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 472px;
    justify-content: center;
  }

  @media (max-width: 520px) {
    grid-template-columns: 236px;
    justify-content: center;
  }
`
