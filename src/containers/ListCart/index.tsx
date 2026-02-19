import { useDispatch, useSelector } from 'react-redux'
import { ButtonMore } from '../../components/CardPerfil/styles'
import * as S from './styles'
import ItemCart from '../../components/ItemCart'
import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Overlay } from '../../styles/global'
import { PriceFormat } from '../../App'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const total = items.reduce((acc, item) => acc + item.price, 0)
  const [typeForm, setTypeForm] = useState('carrinho')

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartCont className={isOpen ? 'is-open' : ''}>
      <S.SideBar>
        {typeForm === 'carrinho' ? (
          <S.Items>
            {items.length === 0 ? (
              <S.Alert>Nenhum produto foi adicionada ao carrinho!</S.Alert>
            ) : (
              items.map((item) => (
                <ItemCart
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              ))
            )}
            <S.Footer>
              <S.Resume className={items.length === 0 ? '' : 'visible'}>
                <div>
                  <p>Valor total:</p>
                  <p>{PriceFormat(total)}</p>
                </div>
                <ButtonMore onClick={() => setTypeForm('entrega')}>
                  Continuar com a entrega
                </ButtonMore>
              </S.Resume>
              <ButtonMore onClick={closeCart}>Fechar carrinho</ButtonMore>
            </S.Footer>
          </S.Items>
        ) : typeForm === 'entrega' ? (
          <>
            <S.Title>Entrega</S.Title>
            <S.Input className="column margin-bottom">
              <S.InputInfo>
                <label htmlFor="nameDelivery">Quem irá receber</label>
                <input type="text" id="nameDelivery" />
              </S.InputInfo>
              <S.InputInfo>
                <label htmlFor="address">Endereço</label>
                <input type="text" id="address" />
              </S.InputInfo>
              <S.InputInfo>
                <label htmlFor="cityAddress">Cidade</label>
                <input type="text" id="cityAddress" />
              </S.InputInfo>
              <S.Input className="row">
                <S.InputInfo>
                  <label htmlFor="cepAddress">CEP</label>
                  <input type="text" id="cepAddress" />
                </S.InputInfo>
                <S.InputInfo>
                  <label htmlFor="numberAddress">Numero</label>
                  <input type="number" id="numberAddress" />
                </S.InputInfo>
              </S.Input>
              <S.InputInfo>
                <label htmlFor="complementAddress">
                  Complemento (opcional)
                </label>
                <input type="text" id="complementAddress" />
              </S.InputInfo>
            </S.Input>
            <S.Footer>
              <ButtonMore onClick={() => setTypeForm('pagamento')}>
                Continuar com o pagamento
              </ButtonMore>
              <ButtonMore onClick={() => setTypeForm('carrinho')}>
                Voltar para o carrinho
              </ButtonMore>
            </S.Footer>
          </>
        ) : typeForm === 'pagamento' ? (
          <>
            <S.Title>Pagamento - Valor a pagar {PriceFormat(total)}</S.Title>
            <S.Input className="column margin-bottom">
              <S.InputInfo>
                <label>Nome no cartão</label>
                <input type="text" />
              </S.InputInfo>
              <S.Input className="row">
                <S.InputInfo className="one-and-half">
                  <label>Número do cartão</label>
                  <input type="text" />
                </S.InputInfo>
                <S.InputInfo className="half">
                  <label>CVV</label>
                  <input type="number" />
                </S.InputInfo>
              </S.Input>
              <S.Input className="row">
                <S.InputInfo>
                  <label>Mês de vencimaneto</label>
                  <input type="number" />
                </S.InputInfo>
                <S.InputInfo>
                  <label>Ano de vencimento</label>
                  <input type="number" />
                </S.InputInfo>
              </S.Input>
            </S.Input>
            <S.Footer>
              <ButtonMore onClick={() => setTypeForm('')}>
                Finalizar pagamento
              </ButtonMore>
              <ButtonMore onClick={() => setTypeForm('entrega')}>
                Voltar para a edição de endereço
              </ButtonMore>
            </S.Footer>
          </>
        ) : (
          <>
            <S.Title>Pedido realizado - Order id</S.Title>
            <S.Text>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.Text>
            <S.Footer>
              <ButtonMore
                onClick={() => {
                  closeCart()
                  setTypeForm('carrinho')
                }}
              >
                Concluir
              </ButtonMore>
            </S.Footer>
          </>
        )}
      </S.SideBar>
      <Overlay
        className={isOpen ? 'is-open' : ''}
        onClick={
          typeForm === ''
            ? () => {
                closeCart()
                setTypeForm('carrinho')
              }
            : closeCart
        }
      />
    </S.CartCont>
  )
}

export default Cart
