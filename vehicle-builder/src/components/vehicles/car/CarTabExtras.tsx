import { Heading, FormControl, Checkbox } from '@contentful/f36-components'
import { CAR_EXTRAS } from '../../../utils/constants'
import { useVehicleConfig } from '../../../hooks/useVehicleConfig'

const CarTabExtras = () => {
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
        Car Extras
      </Heading>

      {/* GPS */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='gps'
          name='gps'
          isChecked={selectedExtras.carGps || false}
          onChange={() => handleExtraChange({ ...selectedExtras, carGps: !selectedExtras.carGps })}
          style={{ fontSize: '16px' }}>
          {CAR_EXTRAS.gps.name} - €{CAR_EXTRAS.gps.price}/day
        </Checkbox>
      </FormControl>

      {/* Child Seat */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='childSeat'
          name='childSeat'
          isChecked={selectedExtras.carChildSeat || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, carChildSeat: !selectedExtras.carChildSeat })
          }
          style={{ fontSize: '16px' }}>
          {CAR_EXTRAS.childSeat.name} - €{CAR_EXTRAS.childSeat.price}/day
        </Checkbox>
      </FormControl>

      {/* Dash Cam */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='dashCam'
          name='dashCam'
          isChecked={selectedExtras.carDashCam || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, carDashCam: !selectedExtras.carDashCam })
          }
          style={{ fontSize: '16px' }}>
          {CAR_EXTRAS.dashCam.name} - €{CAR_EXTRAS.dashCam.price}/day
        </Checkbox>
      </FormControl>

      {/* Extra Driver */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='extraDriver'
          name='extraDriver'
          isChecked={selectedExtras.carExtraDriver || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, carExtraDriver: !selectedExtras.carExtraDriver })
          }
          style={{ fontSize: '16px' }}>
          {CAR_EXTRAS.extraDriver.name} - €{CAR_EXTRAS.extraDriver.price}/day
        </Checkbox>
      </FormControl>
    </>
  )
}

export default CarTabExtras
