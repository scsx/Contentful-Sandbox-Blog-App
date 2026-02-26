import { Tabs, Box, Heading } from '@contentful/f36-components'
import CarTabBasics from './car/CarTabBasics'
import { BOAT_COUNTRIES } from '../../utils/constants'
import { ReactNode } from 'react'

type VehicleTabsProps = {
  vehicleType: 'car' | 'boat' | 'bus'
}

type StyledPanelProps = {
  children: ReactNode
}

const StyledPanel = ({ children }: StyledPanelProps) => (
  <Box
    paddingLeft='spacingM'
    paddingRight='spacingM'
    paddingTop='spacingXl'
    paddingBottom='spacingL'>
    {children}
  </Box>
)

const VehicleTabs = ({ vehicleType }: VehicleTabsProps) => {
  return (
    <Tabs defaultTab='basic'>
      <Tabs.List>
        <Tabs.Tab panelId='basic'>Basic</Tabs.Tab>
        <Tabs.Tab panelId='extras'>Extras</Tabs.Tab>
        <Tabs.Tab panelId='legal'>Legal</Tabs.Tab>
        {vehicleType === 'boat' && <Tabs.Tab panelId='countries'>Countries</Tabs.Tab>}
      </Tabs.List>

      <Tabs.Panel id='basic'>
        <StyledPanel>{vehicleType === 'car' && <CarTabBasics />}</StyledPanel>
      </Tabs.Panel>
      <Tabs.Panel id='extras'>
        <StyledPanel>Extras - {vehicleType}</StyledPanel>
      </Tabs.Panel>
      <Tabs.Panel id='legal'>
        <StyledPanel>Legal - {vehicleType}</StyledPanel>
      </Tabs.Panel>
      <Tabs.Panel id='countries'>
        <StyledPanel>
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
        </StyledPanel>
      </Tabs.Panel>
    </Tabs>
  )
}

export default VehicleTabs
