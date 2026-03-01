import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Item = styled.li`
  background-color: ${colors.colorTextSecundary};
  display: flex;
  padding: 8px;
  height: 100px;
  position: relative;
  margin: 16px 0;

  > img {
    margin-right: 8px;
    margin-bottom: 4px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.colorTextPrimary};
    margin-bottom: 16px;
  }

  div {
    width: 100%;
  }
`

export const Trash = styled.div`
  padding: 10px;
  position: absolute;
  right: 6px;
  bottom: 6px;
  max-width: 16px;
  max-height: 16px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  img {
    position: absolute;
    bottom: 2px;
    right: 2px;
    max-width: 16px;
    max-height: 16px;
  }

  &:hover {
    border-radius: 50%;
    border: 1px solid ${colors.colorTextPrimary};
  }
`
