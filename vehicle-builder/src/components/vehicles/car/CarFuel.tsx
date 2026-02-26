import { Heading, Select, FormControl } from '@contentful/f36-components'
import { ELECTRIC_CAR_BATTERY } from '../../../utils/constants'

type CarFuelProps = {
  fuelType: string
  batteryType: string
  onFuelTypeChange: (value: string) => void
  onBatteryTypeChange: (value: string) => void
}

export const CarFuel = ({
  fuelType,
  batteryType,
  onFuelTypeChange,
  onBatteryTypeChange
}: CarFuelProps) => {
  return (
    <>
      <FormControl style={{ marginTop: '16px' }}>
        <FormControl.Label>
          <Heading fontSize='fontSizeL' marginBottom='none'>
            Fuel Type
          </Heading>
        </FormControl.Label>

        <Select value={fuelType} onChange={(e) => onFuelTypeChange(e.target.value)}>
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

          <Select value={batteryType} onChange={(e) => onBatteryTypeChange(e.target.value)}>
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
