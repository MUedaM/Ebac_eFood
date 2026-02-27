import { useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../../store'
import * as S from '../styles'

import pix from '../../../assets/logos/pix.png'
import card from '../../../assets/logos/card.png'
import qrcode from '../../../assets/images/qrcode.png'
import FooterShop from './FooterShop'
import { PriceFormat } from '../../../App'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../../services/api'

type Props = {
  onBack: () => void
  onNext: () => void
}

const Checkout = ({ onBack, onNext }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const total = items.reduce((acc, item) => acc + item.price, 0)
  const [formPay, setFormPay] = useState(false)
  const [methodCard, setMethodCard] = useState(true)
  const [purchase, { isLoading, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nameReceiver: '',
      address: '',
      cityAddress: '',
      cepAddress: '',
      numberAddress: '',
      complementAddress: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpiresMonth: '',
      cardExpiresYear: ''
    },
    validationSchema: Yup.object({
      nameReceiver: Yup.string()
        .min(4, 'Nome de recebedor invalido')
        .required('Nome de recebedor é obrigatorio'),
      address: Yup.string()
        .min(5, 'Endereço invalido')
        .required('Endereço é obrigatorio'),
      cityAddress: Yup.string()
        .min(4, 'Cidade invalida')
        .required('Cidade é obrigatorio'),
      cepAddress: Yup.string()
        .min(9, 'CEP invalido')
        .required('CEP é obrigatorio'),
      numberAddress: Yup.number().required('Numero é obrigatorio'),
      complementAddress: Yup.string(),

      cardName: Yup.string().when((values, schema) =>
        methodCard
          ? schema
              .min(5, 'Nome de dono do cartão invalido')
              .required('Nome de dono do cartão é obrigatorio')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        methodCard
          ? schema
              .min(19, 'Numero de cartão invalido')
              .required('Numero de cartão é obrigatorio')
          : schema
      ),
      cardCode: Yup.number()
        .min(100, 'CVV invalido')
        .when((values, schema) =>
          methodCard ? schema.required('CVV é obrigatorio') : schema
        ),
      cardExpiresMonth: Yup.number()
        .max(13, 'Mês invalido')
        .when((values, schema) =>
          methodCard ? schema.required('Mês é obrigatorio') : schema
        ),
      cardExpiresYear: Yup.number()
        .min(2026, 'Ano invalido')
        .when((values, schema) =>
          methodCard ? schema.required('Ano é obrigatorio') : schema
        )
    }),

    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.nameReceiver,
          address: {
            description: values.address,
            city: values.cityAddress,
            zipCode: values.cepAddress,
            number: Number(values.numberAddress),
            complement: values.complementAddress
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardExpiresMonth),
              year: Number(values.cardExpiresYear)
            }
          }
        }
      })
    }
  })

  const isInvalid = (fieldName: string) => {
    if (fieldName in form.errors) return true
    return false
  }

  const isTouched = (fieldName: string) => {
    if (fieldName in form.touched) return true
    return false
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    if (isTouched(fieldName) && isInvalid(fieldName)) return message
  }

  const mensagens = Object.entries(form.errors)
    .map(([key, value], index) => `${index + 1} - ${value}`)
    .join('\n')

  return (
    <>
      {formPay ? (
        <>
          {isSuccess ? (
            <>
              <S.Title className="margin-bottom">
                Pedido realizado - Order id
              </S.Title>
              <S.Text>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </S.Text>
              <FooterShop
                ResumeOff
                Inactive={false}
                onNext={onNext}
                TextNext="Concluir"
              />
            </>
          ) : (
            <>
              <S.Title>Escolha o método de Pagamento {isSuccess}</S.Title>
              <S.SubTitle className="margin-bottom align-center">
                Valor a pagar - {PriceFormat(total)}
              </S.SubTitle>
              <S.PayMethod>
                <S.ButtonPayMethod
                  onClick={() => setMethodCard(true)}
                  selected={methodCard === true}
                >
                  <img src={card} alt="logo do pix" />
                  <p>Cartão de Credito</p>
                </S.ButtonPayMethod>
                <S.ButtonPayMethod
                  onClick={() => setMethodCard(false)}
                  selected={methodCard === false}
                >
                  <img src={pix} alt="logo do pix" />
                  <p>PIX</p>
                </S.ButtonPayMethod>
              </S.PayMethod>
              {methodCard ? (
                <S.Form
                  onSubmit={form.handleSubmit}
                  className="column margin-bottom"
                >
                  <S.FormInfo>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardName', form.errors.cardName)}
                    </small>
                  </S.FormInfo>
                  <S.Form as="div" className="row">
                    <S.FormInfo className="one-and-half">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </S.FormInfo>
                    <S.FormInfo className="half">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="number"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </S.FormInfo>
                  </S.Form>
                  <S.SubTitle>Data de validade (MM/AAAA)</S.SubTitle>
                  <S.Form as="div" className="row">
                    <S.FormInfo>
                      <label htmlFor="cardExpiresMonth">Mês</label>
                      <input
                        type="number"
                        id="cardExpiresMonth"
                        name="cardExpiresMonth"
                        value={form.values.cardExpiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'cardExpiresMonth',
                          form.errors.cardExpiresMonth
                        )}
                      </small>
                    </S.FormInfo>
                    <S.FormInfo>
                      <label htmlFor="cardExpiresYear">Ano</label>
                      <input
                        type="number"
                        id="cardExpiresYear"
                        name="cardExpiresYear"
                        value={form.values.cardExpiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'cardExpiresYear',
                          form.errors.cardExpiresYear
                        )}
                      </small>
                    </S.FormInfo>
                    <S.FormInfo>
                      <label htmlFor="installments">Parcelamento</label>
                      <select id="installments">
                        <option>1x de R$ 300,00</option>
                        <option>2x de R$ 150,00</option>
                        <option>3x de R$ 100,00</option>
                      </select>
                    </S.FormInfo>
                  </S.Form>
                  <FooterShop
                    ResumeOff={false}
                    Inactive={false}
                    onNext={() => {
                      form.handleSubmit
                      if (mensagens.length !== 0) {
                        alert(
                          `Os seguintes campos estão invalidos:\n\n${mensagens}`
                        )
                      }
                    }}
                    TextNext={
                      isLoading
                        ? 'Finalizando pagamento...'
                        : 'Finalizar pagamento'
                    }
                    onBack={() => setFormPay(false)}
                    TextBack="Voltar para edição de endereço"
                  />
                </S.Form>
              ) : (
                <S.CodeCont>
                  <S.SubTitle className="margin-bottom">
                    Escaneie o codigo abaixo com a câmera do celular
                  </S.SubTitle>
                  <img src={qrcode} alt="codigo QR Code Pix" />
                  <FooterShop
                    ResumeOff={false}
                    Inactive={false}
                    onNext={form.handleSubmit}
                    TextNext={
                      isLoading
                        ? 'Finalizando pagamento...'
                        : 'Finalizar pagamento'
                    }
                    onBack={() => setFormPay(false)}
                    TextBack="Voltar para edição de endereço"
                  />
                </S.CodeCont>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <S.Title>Entrega</S.Title>
          <S.Form onSubmit={form.handleSubmit} className="column margin-bottom">
            <S.FormInfo>
              <label htmlFor="nameReceiver">Quem irá receber</label>
              <input
                type="text"
                id="nameReceiver"
                name="nameReceiver"
                value={form.values.nameReceiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('nameReceiver', form.errors.nameReceiver)}
              </small>
            </S.FormInfo>
            <S.FormInfo>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('address', form.errors.address)}</small>
            </S.FormInfo>
            <S.FormInfo>
              <label htmlFor="cityAddress">Cidade</label>
              <input
                type="text"
                id="cityAddress"
                name="cityAddress"
                value={form.values.cityAddress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cityAddress', form.errors.cityAddress)}
              </small>
            </S.FormInfo>
            <S.Form as="div" className="row">
              <S.FormInfo>
                <label htmlFor="cepAddress">CEP</label>
                <input
                  type="text"
                  id="cepAddress"
                  name="cepAddress"
                  value={form.values.cepAddress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cepAddress', form.errors.cepAddress)}
                </small>
              </S.FormInfo>
              <S.FormInfo>
                <label htmlFor="numberAddress">Numero</label>
                <input
                  type="number"
                  id="numberAddress"
                  name="numberAddress"
                  value={form.values.numberAddress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('numberAddress', form.errors.numberAddress)}
                </small>
              </S.FormInfo>
            </S.Form>
            <S.FormInfo>
              <label htmlFor="complementAddress">Complemento (opcional)</label>
              <input
                type="text"
                id="complementAddress"
                name="complementAddress"
                value={form.values.complementAddress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'complementAddress',
                  form.errors.complementAddress
                )}
              </small>
            </S.FormInfo>
            <FooterShop
              Inactive={false}
              ResumeOff
              onNext={() => setFormPay(true)}
              TextNext="Continuar com o pagamento"
              onBack={onBack}
              TextBack="Voltar para o carrinho"
            />
          </S.Form>
        </>
      )}
    </>
  )
}

export default Checkout
