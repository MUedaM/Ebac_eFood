import { useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../../store'
import * as S from '../styles'

import pix from '../../../assets/logos/pix.png'
import card from '../../../assets/logos/card.png'
import qrcode from '../../../assets/images/qrcode.png'
import Footer from './footer'
import { PriceFormat } from '../../../App'

type Props = {
  onNext: () => void
  onBack: () => void
}

const Payment = ({ onNext, onBack }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const total = items.reduce((acc, item) => acc + item.price, 0)
  const [method, setMethod] = useState('')

  return (
    <>
      <S.Title>Escolha o método de Pagamento</S.Title>
      <S.SubTitle className="margin-bottom align-center">
        Valor a pagar - {PriceFormat(total)}
      </S.SubTitle>
      <S.PayMethod>
        <S.ButtonPayMethod
          onClick={() => setMethod('Method-Card')}
          isActive={method === 'Method-Card'}
        >
          <img src={card} alt="logo do pix" />
          <p>Cartão de Credito</p>
        </S.ButtonPayMethod>
        <S.ButtonPayMethod
          onClick={() => setMethod('Method-Pix')}
          isActive={method === 'Method-Pix'}
        >
          <img src={pix} alt="logo do pix" />
          <p>PIX</p>
        </S.ButtonPayMethod>
      </S.PayMethod>
      {method === 'Method-Card' ? (
        <S.Input className="column margin-bottom">
          <S.InputInfo>
            <label htmlFor="cardName">Nome no cartão</label>
            <input type="text" id="cardName" required />
          </S.InputInfo>
          <S.Input className="row">
            <S.InputInfo className="one-and-half">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input type="text" id="cardNumber" required />
            </S.InputInfo>
            <S.InputInfo className="half">
              <label htmlFor="cardCode">CVV</label>
              <input type="number" id="cardCode" required />
            </S.InputInfo>
          </S.Input>
          <S.SubTitle>Data de validade (MM/AAAA)</S.SubTitle>
          <S.Input className="row">
            <S.InputInfo>
              <label htmlFor="cardExpiresMonth">Mês</label>
              <input type="number" id="cardExpiresMonth" required />
            </S.InputInfo>
            <S.InputInfo>
              <label htmlFor="cardExpiresYear">Ano</label>
              <input type="number" id="cardExpiresYear" required />
            </S.InputInfo>
            <S.InputInfo>
              <label>Parcelamento</label>
              <select>
                <option>1x de R$ 300,00</option>
                <option>2x de R$ 150,00</option>
                <option>3x de R$ 100,00</option>
              </select>
            </S.InputInfo>
          </S.Input>
        </S.Input>
      ) : method === 'Method-Pix' ? (
        <S.CodeCont>
          <S.SubTitle className="margin-bottom">
            Escaneie o codigo abaixo com a câmera do celular
          </S.SubTitle>
          <img src={qrcode} alt="codigo QR Code Pix" />
        </S.CodeCont>
      ) : (
        <S.SubTitle className="align-center margin-bottom">
          Clique acima em um dos metodos de pagamento disponível
        </S.SubTitle>
      )}
      <Footer
        ResumeOff
        Inactive={method === ''}
        TextNext="Finalizar pagamento"
        onNext={onNext}
        TextBack="Voltar para a edição de endereço"
        onBack={onBack}
      />
    </>
  )
}

export default Payment
