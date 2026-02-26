import { Tabs, Box, Heading } from '@contentful/f36-components'
import CarTabBasics from './car/CarTabBasics'
import { BOAT_COUNTRIES } from '../../utils/constants'

type VehicleTabsProps = {
  vehicleType: 'car' | 'boat' | 'bus'
  selectedBasics?: any
  onBasicsChange?: (basics: any) => void
}

const VehicleTabs = ({ vehicleType, selectedBasics, onBasicsChange }: VehicleTabsProps) => {
  return (
    <Tabs defaultTab='basic'>
      <Tabs.List>
        <Tabs.Tab panelId='basic'>Basic</Tabs.Tab>
        <Tabs.Tab panelId='extras'>Extras</Tabs.Tab>
        <Tabs.Tab panelId='legal'>Legal</Tabs.Tab>
        {vehicleType === 'boat' && <Tabs.Tab panelId='countries'>Countries</Tabs.Tab>}
      </Tabs.List>

      <Tabs.Panel id='basic'>
        <Box padding='spacingM'>
          {vehicleType === 'car' && (
            <CarTabBasics
              selectedBasics={selectedBasics}
              onBasicsChange={onBasicsChange || (() => {})}
            />
          )}
        </Box>
      </Tabs.Panel>
      <Tabs.Panel id='extras'>
        <Box padding='spacingM'>Extras - {vehicleType}</Box>
      </Tabs.Panel>
      <Tabs.Panel id='legal'>
        <Box padding='spacingM'>Legal - {vehicleType}</Box>
      </Tabs.Panel>
      <Tabs.Panel id='countries'>
        <Box padding='spacingM'>
          {vehicleType === 'boat' && (
            <>
              <Heading fontSize='fontSizeL' marginBottom='spacingM'>
                Allowed Countries to sail to
              </Heading>
              <ul>
                {BOAT_COUNTRIES.map((country) => (
                  <li key={country}>{country}</li>
                ))}
              </ul>
            </>
          )}
        </Box>
      </Tabs.Panel>
    </Tabs>
  )
}

export default VehicleTabs
