import { HeroImg, ImgText } from './styles'

type Props = {
  category: string
  restaurant: string
  image: string
}

const HeroProfle = ({ category, restaurant, image }: Props) => (
  <>
    <ImgText>
      <div className="container">
        <h3>{category}</h3>
        <h2>{restaurant}</h2>
      </div>
    </ImgText>
    <HeroImg src={image} alt="foto de comida" />
  </>
)

export default HeroProfle
