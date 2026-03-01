import styled from 'styled-components'
import { Action, colors } from '../../styles/global'

export const Card = styled.div`
  background-color: ${colors.colorTextPrimary};
  padding: 8px;
  position: relative;
  width: 100%;
  max-width: 320px;
  min-height: 338px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    &:hover {
      ${Action} {
        opacity: 1;
      }
    }
  }

  @media (max-width: 520px) {
    min-height: 340px;
  }
`

export const Cover = styled.img`
  display: block;
  height: 100%;
  max-height: 168px;
  width: 100%;
  max-width: 304px;
  object-fit: cover;
`

export const Title = styled.h4`
  color: ${colors.colorTextSecundary};
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const Descricao = styled.p`
  color: ${colors.colorTextSecundary};
  font-size: 14px;
  font-weight: 400;
  margin: 8px 0;
  line-height: 22px;
`

export const ButtonMore = styled.button`
  color: ${colors.colorTextPrimary};
  background-color: ${colors.colorTextSecundary};
  border: 1px solid transparent;
  padding: 4px;
  display: block;
  width: 100%;
  margin-top: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.colorTextSecundary};
    background-color: ${colors.colorTextPrimary};
    border: 1px solid ${colors.colorTextSecundary};
  }
`
