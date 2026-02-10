import styled from 'styled-components'

export const ListCont = styled.div`
  padding-top: 56px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  row-gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`
