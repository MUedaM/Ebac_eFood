import { Item, Trash } from './styles'

import { PriceFormat } from '../../utils'

import lixeira from '../../assets/logos/lixeira.png'

import { useDispatch } from 'react-redux'
import { removeItem } from '../../store/reducers/cart'

type Props = {
  id: number
  image: string
  name: string
  price: number
}

const ItemCart = ({ id, image, name, price }: Props) => {
  const dispatch = useDispatch()

  const removeCart = () => {
    dispatch(removeItem(id))
  }

  return (
    <Item>
      <img src={image} alt="imagem da comida" />
      <div>
        <h3>{name}</h3>
        <p>{PriceFormat(price)}</p>
        <Trash onClick={removeCart}>
          <img src={lixeira} alt="botão para exclusão" />
        </Trash>
      </div>
    </Item>
  )
}

export default ItemCart
