import { Heading, Select, FormControl } from '@contentful/f36-components'
import { ELECTRIC_CAR_BATTERY } from '../../../utils/constants'
import { useVehicleConfig } from '../../../hooks/useVehicleConfig'

export const CarFuel = () => {
  const { vehicleConfig, setVehicleConfig } = useVehicleConfig()
  const fuelType = vehicleConfig.carFuelType || 'petrol'
  const batteryType = vehicleConfig.carBatteryType || 'Lithium-NMC'

  const handleFuelChange = (value: string) => {
    setVehicleConfig({
      ...vehicleConfig,
      carFuelType: value as 'petrol' | 'diesel' | 'electric'
    })
  }

  const handleBatteryChange = (value: string) => {
    setVehicleConfig({
      ...vehicleConfig,
      carBatteryType: value as 'Lithium-NMC' | 'Sodium-ion' | 'NiMH'
    })
  }

  return (
    <>
      <FormControl style={{ marginTop: '16px' }}>
        <FormControl.Label>
          <Heading fontSize='fontSizeL' marginBottom='none'>
            Fuel Type
          </Heading>
        </FormControl.Label>

        <Select value={fuelType} onChange={(e) => handleFuelChange(e.target.value)}>
          <Select.Option value='petrol'>Petrol</Select.Option>
          <Select.Option value='diesel'>Diesel</Select.Option>
          <Select.Option value='electric'>Electric</Select.Option>
        </Select>
      </FormControl>

      {fuelType === 'electric' && (
        <FormControl style={{ marginTop: '16px' }}>
          <FormControl.Label>
            <Heading fontSize='fontSizeL' marginBottom='none'>
              Battery
            </Heading>
          </FormControl.Label>

          <Select value={batteryType} onChange={(e) => handleBatteryChange(e.target.value)}>
            {Object.entries(ELECTRIC_CAR_BATTERY).map(([key, battery]) => (
              <Select.Option key={key} value={key}>
                {battery.name} (+{battery.price}€/day)
              </Select.Option>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  )
}

export default CarFuel
