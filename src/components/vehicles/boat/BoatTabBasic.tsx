import { Heading, FormControl, Checkbox } from '@contentful/f36-components'
import { BOAT_BASICS } from '../../../utils/constants'
import { useVehicleConfig } from '../../../hooks/useVehicleConfig'

const BoatTabBasic = () => {
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
      <Heading fontSize='fontSizeL' marginBottom='spacingM'>
        Boat Basics
      </Heading>

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
          {BOAT_BASICS.deposit.name} - €{BOAT_BASICS.deposit.price}
        </Checkbox>
      </FormControl>

      {/* Marina Fee */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='marinaFee'
          name='marinaFee'
          style={{ fontSize: '16px' }}
          isChecked={selectedBasics.boatMarinaFee || false}
          onChange={() =>
            handleBasicsChange({
              ...selectedBasics,
              boatMarinaFee: !selectedBasics.boatMarinaFee
            })
          }>
          {BOAT_BASICS.marinaFee.name} - €{BOAT_BASICS.marinaFee.price}
        </Checkbox>
      </FormControl>

      {/* Harbor Permit */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='harborPermit'
          name='harborPermit'
          style={{ fontSize: '16px' }}
          isChecked={selectedBasics.boatHarborPermit || false}
          onChange={() =>
            handleBasicsChange({
              ...selectedBasics,
              boatHarborPermit: !selectedBasics.boatHarborPermit
            })
          }>
          {BOAT_BASICS.harborPermit.name} - €{BOAT_BASICS.harborPermit.price}
        </Checkbox>
      </FormControl>

      {/* Cleaning Fee */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='cleaningFee'
          name='cleaningFee'
          style={{ fontSize: '16px' }}
          isChecked={selectedBasics.boatCleaningFee || false}
          onChange={() =>
            handleBasicsChange({
              ...selectedBasics,
              boatCleaningFee: !selectedBasics.boatCleaningFee
            })
          }>
          {BOAT_BASICS.cleaningFee.name} - €{BOAT_BASICS.cleaningFee.price}
        </Checkbox>
      </FormControl>
    </>
  )
}

export default BoatTabBasic
