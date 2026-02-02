import { TagCont } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagCont>{children}</TagCont>

export default Tag
