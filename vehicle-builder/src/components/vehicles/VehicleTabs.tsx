import { Tabs } from '@contentful/f36-components'

type VehicleTabsProps = {
  vehicleType: 'car' | 'boat' | 'bus'
}

const VehicleTabs = ({ vehicleType }: VehicleTabsProps) => {
  return (
    <Tabs defaultTab='basic'>
      <Tabs.List>
        <Tabs.Tab panelId='basic'>Basic</Tabs.Tab>
        <Tabs.Tab panelId='engine'>Extras</Tabs.Tab>
        <Tabs.Tab panelId='legal'>Legal</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel id='basic'>Basic - {vehicleType}</Tabs.Panel>
      <Tabs.Panel id='engine'>Extras - {vehicleType}</Tabs.Panel>
      <Tabs.Panel id='legal'>Legal - {vehicleType}</Tabs.Panel>
    </Tabs>
  )
}

export default VehicleTabs
