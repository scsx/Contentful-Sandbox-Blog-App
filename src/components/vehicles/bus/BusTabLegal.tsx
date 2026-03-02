import { Heading, List } from '@contentful/f36-components'
import { BUS_LEGAL } from '../../../utils/constants'

const BusTabLegal = () => {
  return (
    <>
      <Heading fontSize='fontSizeL' marginBottom='spacingM'>
        Required Legal Documents & Conditions
      </Heading>
      <List>
        {BUS_LEGAL.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
    </>
  )
}

export default BusTabLegal
