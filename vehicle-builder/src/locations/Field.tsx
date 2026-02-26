import { Flex, Box, Paragraph, Heading, Select, FormControl } from '@contentful/f36-components'
import { FieldAppSDK } from '@contentful/app-sdk'
import { useSDK } from '@contentful/react-apps-toolkit'
import { useState, useEffect } from 'react'
import { CarFuel } from '../components/vehicles/car/CarFuel'
import VehicleTabs from '../components/vehicles/VehicleTabs'
import { TVehicle } from '../types/vehicle'

const Field = () => {
  const sdk = useSDK<FieldAppSDK>()

  const [vehicleConfig] = useState<TVehicle>({
    type: 'car',
    carFuelType: 'petrol',
    carBatteryType: null,
    selectedBasics: {},
    selectedExtras: {},
    costPerDay: 0,
    costFixed: 0,
    costOfDeposit: 0
  })

  const [vehicleType, setVehicleType] = useState('car')
  const [fuelType, setFuelType] = useState('petrol')
  const [batteryType, setBatteryType] = useState('Lithium-NMC')

  useEffect(() => {
    sdk.window.startAutoResizer()
  }, [sdk.window])

  // Guardar no Contentful
  useEffect(() => {
    sdk.field.setValue(vehicleConfig)
  }, [vehicleConfig, sdk])

  return (
    <>
      <Flex justifyContent='space-between' alignItems='start'>
        <Box flexGrow={1}>
          <FormControl>
            <FormControl.Label>
              <Heading fontSize='fontSizeL' marginBottom='none'>
                Vehicle Type
              </Heading>
            </FormControl.Label>

            <Select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
              <Select.Option value='car'>Car</Select.Option>
              <Select.Option value='boat'>Boat</Select.Option>
              <Select.Option value='bus'>Bus</Select.Option>
            </Select>
          </FormControl>

          {vehicleType === 'car' && (
            <CarFuel
              fuelType={fuelType}
              batteryType={batteryType}
              onFuelTypeChange={setFuelType}
              onBatteryTypeChange={setBatteryType}
            />
          )}

          <VehicleTabs vehicleType={vehicleType as 'car' | 'boat' | 'bus'} />
        </Box>
        <Box>
          <Heading fontSize='fontSizeL' marginBottom='none'>
            Daily price
          </Heading>
          <Heading fontSize='fontSize3Xl' fontColor='green500'>
            55€
          </Heading>
          <Heading fontSize='fontSizeL' marginBottom='none'>
            Fixed price
          </Heading>
          <Heading fontSize='fontSize3Xl' fontColor='green500'>
            0€
          </Heading>
          <Heading fontSize='fontSizeL' marginBottom='none'>
            Deposit
          </Heading>
          <Heading fontSize='fontSize3Xl' fontColor='green500'>
            150€
          </Heading>
        </Box>
      </Flex>
      <Paragraph marginTop='spacingXl'>This is Field Component (AppId: {sdk.ids.app})</Paragraph>
    </>
  )
}

export default Field
