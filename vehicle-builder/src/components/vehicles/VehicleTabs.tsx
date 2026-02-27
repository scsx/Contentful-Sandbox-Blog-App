import { Tabs, Box, Heading } from '@contentful/f36-components'
import CarTabBasics from './car/CarTabBasics'
import CarTabExtras from './car/CarTabExtras'
import CarTabLegal from './car/CarTabLegal'
import BoatTabBasic from './boat/BoatTabBasic'
import BoatTabExtras from './boat/BoatTabExtras'
import BoatTabLegal from './boat/BoatTabLegal'
import BusTabBasic from './bus/BusTabBasic'
import BusTabExtras from './bus/BusTabExtras'
import BusTabLegal from './bus/BusTabLegal'
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
        <StyledPanel>
          {vehicleType === 'car' && <CarTabBasics />}
          {vehicleType === 'boat' && <BoatTabBasic />}
          {vehicleType === 'bus' && <BusTabBasic />}
        </StyledPanel>
      </Tabs.Panel>
      <Tabs.Panel id='extras'>
        <StyledPanel>
          {vehicleType === 'car' && <CarTabExtras />}
          {vehicleType === 'boat' && <BoatTabExtras />}
          {vehicleType === 'bus' && <BusTabExtras />}
        </StyledPanel>
      </Tabs.Panel>
      <Tabs.Panel id='legal'>
        <StyledPanel>
          {vehicleType === 'car' && <CarTabLegal />}
          {vehicleType === 'boat' && <BoatTabLegal />}
          {vehicleType === 'bus' && <BusTabLegal />}
        </StyledPanel>
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
