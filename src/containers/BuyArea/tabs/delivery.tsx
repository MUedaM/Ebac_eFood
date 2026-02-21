import * as S from '../styles'

const Delivery = () => (
  <>
    <S.Title>Entrega</S.Title>
    <S.Input className="column margin-bottom">
      <S.InputInfo>
        <label htmlFor="nameDelivery">Quem irá receber</label>
        <input type="text" id="nameDelivery" required />
      </S.InputInfo>
      <S.InputInfo>
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" required />
      </S.InputInfo>
      <S.InputInfo>
        <label htmlFor="cityAddress">Cidade</label>
        <input type="text" id="cityAddress" required />
      </S.InputInfo>
      <S.Input className="row">
        <S.InputInfo>
          <label htmlFor="cepAddress">CEP</label>
          <input type="text" id="cepAddress" required />
        </S.InputInfo>
        <S.InputInfo>
          <label htmlFor="numberAddress">Numero</label>
          <input type="number" id="numberAddress" required />
        </S.InputInfo>
      </S.Input>
      <S.InputInfo>
        <label htmlFor="complementAddress">Complemento (opcional)</label>
        <input type="text" id="complementAddress" />
      </S.InputInfo>
    </S.Input>
  </>
)

export default Delivery
