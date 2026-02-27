import { Heading, FormControl, Checkbox } from '@contentful/f36-components'
import { BOAT_EXTRAS } from '../../../utils/constants'
import { useVehicleConfig } from '../../../hooks/useVehicleConfig'

const BoatTabExtras = () => {
  const { vehicleConfig, setVehicleConfig } = useVehicleConfig()
  const selectedExtras = vehicleConfig.selectedExtras || {}

  const handleExtraChange = (newExtras: any) => {
    setVehicleConfig({
      ...vehicleConfig,
      selectedExtras: newExtras
    })
  }

  return (
    <>
      <Heading fontSize='fontSizeL' marginBottom='spacingM'>
        Boat Extras
      </Heading>

      {/* Skipper */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='skipper'
          name='skipper'
          isChecked={selectedExtras.boatSkipper || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, boatSkipper: !selectedExtras.boatSkipper })
          }
          style={{ fontSize: '16px' }}>
          {BOAT_EXTRAS.skipper.name} - €{BOAT_EXTRAS.skipper.price}/day
        </Checkbox>
      </FormControl>

      {/* Fuel Included */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='fuelIncluded'
          name='fuelIncluded'
          isChecked={selectedExtras.boatFuelIncluded || false}
          onChange={() =>
            handleExtraChange({
              ...selectedExtras,
              boatFuelIncluded: !selectedExtras.boatFuelIncluded
            })
          }
          style={{ fontSize: '16px' }}>
          {BOAT_EXTRAS.fuelIncluded.name} - €{BOAT_EXTRAS.fuelIncluded.price}/day
        </Checkbox>
      </FormControl>

      {/* Insurance */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='insurance'
          name='insurance'
          isChecked={selectedExtras.boatInsurance || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, boatInsurance: !selectedExtras.boatInsurance })
          }
          style={{ fontSize: '16px' }}>
          {BOAT_EXTRAS.insurance.name} - €{BOAT_EXTRAS.insurance.price}/day
        </Checkbox>
      </FormControl>

      {/* Water Sports */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='waterSports'
          name='waterSports'
          isChecked={selectedExtras.boatWaterSports || false}
          onChange={() =>
            handleExtraChange({
              ...selectedExtras,
              boatWaterSports: !selectedExtras.boatWaterSports
            })
          }
          style={{ fontSize: '16px' }}>
          {BOAT_EXTRAS.waterSports.name} - €{BOAT_EXTRAS.waterSports.price}/day
        </Checkbox>
      </FormControl>

      {/* Crew */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='crew'
          name='crew'
          isChecked={selectedExtras.boatCrew || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, boatCrew: !selectedExtras.boatCrew })
          }
          style={{ fontSize: '16px' }}>
          {BOAT_EXTRAS.crew.name} - €{BOAT_EXTRAS.crew.price}/day
        </Checkbox>
      </FormControl>

      {/* Safety Kit */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='safetyKit'
          name='safetyKit'
          isChecked={selectedExtras.boatSafetyKit || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, boatSafetyKit: !selectedExtras.boatSafetyKit })
          }
          style={{ fontSize: '16px' }}>
          {BOAT_EXTRAS.safetyKit.name} - €{BOAT_EXTRAS.safetyKit.price}/day
        </Checkbox>
      </FormControl>
    </>
  )
}

export default BoatTabExtras
