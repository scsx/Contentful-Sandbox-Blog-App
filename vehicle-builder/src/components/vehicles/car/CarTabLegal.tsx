import { List } from '@contentful/f36-components'
import { CAR_LEGAL } from '../../../utils/constants'

const CarTabLegal = () => {
  return (
    <List>
      {CAR_LEGAL.map((item) => (
        <List.Item key={item}>{item}</List.Item>
      ))}
    </List>
  )
}

export default CarTabLegal
