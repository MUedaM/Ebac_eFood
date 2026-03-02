import { useSelector } from 'react-redux'

import { ButtonMore } from '../../../components/CardProfile/styles'

import * as S from '../styles'
import { PriceFormat } from '../../../utils'
import { RootReducer } from '../../../store'

type Props = {
  ResumeOff: boolean
  Inactive: boolean
  onNext: () => void
  TextNext: string
  disabled?: boolean
  onBack?: () => void
  TextBack?: string
}

const FooterShop = ({
  ResumeOff,
  Inactive,
  onNext,
  TextNext,
  disabled,
  onBack,
  TextBack
}: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const total = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <S.Footer>
      <S.Resume className={items.length === 0 || ResumeOff ? '' : 'visible'}>
        <div>
          <p>Valor total:</p>
          <p>{PriceFormat(total)}</p>
        </div>
      </S.Resume>
      <ButtonMore
        type="submit"
        className={items.length === 0 && Inactive ? '' : 'visible'}
        onClick={onNext}
        disabled={disabled}
      >
        {TextNext}
      </ButtonMore>
      <ButtonMore
        className={TextBack === undefined ? '' : 'visible'}
        onClick={onBack}
      >
        {TextBack}
      </ButtonMore>
    </S.Footer>
  )
}

export default FooterShop
