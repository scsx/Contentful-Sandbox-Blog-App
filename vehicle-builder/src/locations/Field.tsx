import { Flex, Box, Paragraph, Heading, Select, FormControl } from '@contentful/f36-components'
import { FieldAppSDK } from '@contentful/app-sdk'
import { useSDK } from '@contentful/react-apps-toolkit'
import { useState, useEffect } from 'react'
import { CarFuel } from '../components/vehicles/car/CarFuel'
import VehicleTabs from '../components/vehicles/VehicleTabs'
import { VehicleProvider } from '../context/VehicleContext'
import { useVehicleConfig } from '../hooks/useVehicleConfig'
import { usePriceCalculation } from '../hooks/usePriceCalculation'

const FieldContent = () => {
  const sdk = useSDK<FieldAppSDK>()
  const { vehicleConfig, setVehicleConfig } = useVehicleConfig()
  usePriceCalculation() // Calcula preços automaticamente

  const [vehicleType, setVehicleType] = useState('car')

  useEffect(() => {
    sdk.window.startAutoResizer()
  }, [sdk.window])

  // Atualizar tipo de veículo no contexto
  useEffect(() => {
    if (vehicleType !== vehicleConfig.type) {
      setVehicleConfig({
        type: vehicleType as 'car' | 'boat' | 'bus',
        carFuelType: vehicleType === 'car' ? 'petrol' : undefined,
        carBatteryType: vehicleType === 'car' ? null : undefined,
        selectedBasics: {},
        selectedExtras: {},
        costPerDay: 0,
        costFixed: 0,
        costOfDeposit: 0
      })
    }
  }, [vehicleType, setVehicleConfig])

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

          {vehicleType === 'car' && <CarFuel />}

          <VehicleTabs vehicleType={vehicleType as 'car' | 'boat' | 'bus'} />
        </Box>
        <Box>
          <Heading fontSize='fontSizeL'>Daily price</Heading>
          <Heading fontSize='fontSize3Xl' fontColor='green500'>
            {vehicleConfig.costPerDay}€
          </Heading>
          <Heading fontSize='fontSizeL'>Fixed price</Heading>
          <Heading fontSize='fontSize3Xl' fontColor='green500'>
            {vehicleConfig.costFixed}€
          </Heading>
          <Heading fontSize='fontSizeL'>Deposit</Heading>
          <Heading fontSize='fontSize3Xl' fontColor='green500'>
            {vehicleConfig.costOfDeposit}€
          </Heading>
        </Box>
      </Flex>
      <Paragraph marginTop='spacingXl'>This is Field Component (AppId: {sdk.ids.app})</Paragraph>
    </>
  )
}

const Field = () => {
  return (
    <VehicleProvider>
      <FieldContent />
    </VehicleProvider>
  )
}

export default Field
