import styled from 'styled-components'
import imagebg from '../../assets/images/imagebg.png'

export const HeaderCont = styled.header`
  background-image: url(${imagebg});
  padding: 64px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SubTitulo = styled.p`
  font-size: 18px;
  font-weight: 900;
  flex: 1;
`

export const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const Carrinho = styled.p`
  font-size: 18px;
  font-weight: 900;
  flex: 1;
  text-align: right;
`
