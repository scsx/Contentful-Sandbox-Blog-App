import { List } from '@contentful/f36-components'
import { BOAT_LEGAL } from '../../../utils/constants'

const BoatTabLegal = () => {
  return (
    <List>
      {BOAT_LEGAL.map((item) => (
        <List.Item key={item}>{item}</List.Item>
      ))}
    </List>
  )
}

export default BoatTabLegal
