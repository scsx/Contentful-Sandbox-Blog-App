import { Heading, FormControl, Checkbox } from '@contentful/f36-components'
import { BUS_BASICS } from '../../../utils/constants'
import { useVehicleConfig } from '../../../hooks/useVehicleConfig'
import { Caption } from '@contentful/f36-components'

const BusTabBasic = () => {
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
          {BUS_BASICS.deposit.name} - €{BUS_BASICS.deposit.price}
        </Checkbox>
      </FormControl>

      {/* Driver Clearance */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='driverClearance'
          name='driverClearance'
          style={{ fontSize: '16px' }}
          isChecked={selectedBasics.busDriverClearance || false}
          onChange={() =>
            handleBasicsChange({
              ...selectedBasics,
              busDriverClearance: !selectedBasics.busDriverClearance
            })
          }>
          {BUS_BASICS.driverClearance.name} - €{BUS_BASICS.driverClearance.price}
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
          {BUS_BASICS.tolls.name} - €{BUS_BASICS.tolls.price}
        </Checkbox>
      </FormControl>

      {/* Passengers */}
      <Heading fontSize='fontSizeL' marginTop='spacingXl'>
        {BUS_BASICS.passengers.name}
      </Heading>
      <FormControl style={{ marginTop: '16px' }}>
        <input
          type='range'
          id='passengers'
          name='passengers'
          min='1'
          max='50'
          value={selectedBasics.busPassengers || 1}
          onChange={(e) =>
            handleBasicsChange({
              ...selectedBasics,
              busPassengers: Number(e.target.value)
            })
          }
          style={{ width: '100%', cursor: 'pointer' }}
        />
        <Caption fontWeight='fontWeightMedium'>{selectedBasics.busPassengers || 1}</Caption>
      </FormControl>
      <Caption> €{BUS_BASICS.passengers.price} per passenger</Caption>
    </>
  )
}

export default BusTabBasic
