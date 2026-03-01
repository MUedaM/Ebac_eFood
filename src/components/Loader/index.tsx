import { SyncLoader } from 'react-spinners'
import { Container } from './style'
import { colors } from '../../styles/global'

const Loader = () => (
  <Container>
    <SyncLoader color={colors.colorTextPrimary} />
  </Container>
)

export default Loader
