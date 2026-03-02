import { Heading, FormControl, Select, Checkbox } from '@contentful/f36-components'
import { CAR_BASICS } from '../../../utils/constants'
import { useVehicleConfig } from '../../../hooks/useVehicleConfig'

const CarTabBasics = () => {
  const { vehicleConfig, setVehicleConfig } = useVehicleConfig()
  const selectedBasics = vehicleConfig.selectedBasics || {}

  const handleBasicsChange = (newBasics: any) => {
    setVehicleConfig({
      ...vehicleConfig,
      selectedBasics: newBasics
    })
  }
  return (
    <>
      {/* Deposit */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='deposit'
          name='deposit'
          style={{ fontSize: '16px' }}
          isChecked={selectedBasics.deposit || false}
          onChange={() =>
            handleBasicsChange({ ...selectedBasics, deposit: !selectedBasics.deposit })
          }>
          {CAR_BASICS.deposit.name} - €{CAR_BASICS.deposit.price}
        </Checkbox>
      </FormControl>

      {/* Tolls */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='tolls'
          name='tolls'
          style={{ fontSize: '16px' }}
          isChecked={selectedBasics.carAndBusTolls || false}
          onChange={() =>
            handleBasicsChange({
              ...selectedBasics,
              carAndBusTolls: !selectedBasics.carAndBusTolls
            })
          }>
          {CAR_BASICS.tolls.name} - €{CAR_BASICS.tolls.price}
        </Checkbox>
      </FormControl>

      {/* Tier - Select */}
      <FormControl>
        <FormControl.Label>
          <Heading fontSize='fontSizeL' marginBottom='none'>
            {CAR_BASICS.tier.name}
          </Heading>
        </FormControl.Label>

        <Select
          value={selectedBasics.carTier || 'standard'}
          onChange={(e) => handleBasicsChange({ ...selectedBasics, carTier: e.target.value })}>
          {Object.entries(CAR_BASICS.tier.tiers).map(([key, tier]) => (
            <Select.Option key={key} value={key}>
              {tier.name} - €{tier.price}/day
            </Select.Option>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default CarTabBasics
