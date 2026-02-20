import { useSelector } from 'react-redux'
import { PriceFormat } from '../../../App'
import { ButtonMore } from '../../../components/CardProfile/styles'
import * as S from '../styles'
import { RootReducer } from '../../../store'

type Props = {
  ResumeOff: boolean
  onNext: () => void
  TextNext: string
  onBack?: () => void
  TextBack?: string
}

const Footer = ({ ResumeOff, onNext, TextNext, onBack, TextBack }: Props) => {
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
        className={items.length === 0 ? '' : 'visible'}
        onClick={onNext}
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

export default Footer
