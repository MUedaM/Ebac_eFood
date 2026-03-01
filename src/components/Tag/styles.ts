import styled from 'styled-components'
import { colors } from '../../styles/global'

export const TagCont = styled.div`
  background-color: ${colors.colorTextPrimary};
  color: ${colors.colorTextSecundary};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
  margin-top: 8px;
  position: sticky;
  z-index: 1;

  @media (max-width: 520px) {
    margin-right: 0;
    margin-left: 8px;
    margin-bottom: 8px;
  }
`
