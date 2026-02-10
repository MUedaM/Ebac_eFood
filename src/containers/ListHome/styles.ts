import styled from 'styled-components'

export const ListCont = styled.div`
  padding-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  row-gap: 48px;

  @media (max-width: 984px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`
