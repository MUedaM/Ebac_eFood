import { ButtonLink } from './styles'

type Props = {
  to: string
}

const InfoButton = ({ to }: Props) => (
  <ButtonLink to={to}>Saiba mais</ButtonLink>
)

export default InfoButton
