import { Heading, FormControl, Checkbox } from '@contentful/f36-components'
import { BUS_EXTRAS } from '../../../utils/constants'
import { useVehicleConfig } from '../../../hooks/useVehicleConfig'

const BusTabExtras = () => {
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
        Bus Extras
      </Heading>

      {/* Guide */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='guide'
          name='guide'
          isChecked={selectedExtras.busGuide || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, busGuide: !selectedExtras.busGuide })
          }
          style={{ fontSize: '16px' }}>
          {BUS_EXTRAS.guide.name} - €{BUS_EXTRAS.guide.price}/day
        </Checkbox>
      </FormControl>

      {/* WiFi */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='wifi'
          name='wifi'
          isChecked={selectedExtras.busWifi || false}
          onChange={() =>
            handleExtraChange({ ...selectedExtras, busWifi: !selectedExtras.busWifi })
          }
          style={{ fontSize: '16px' }}>
          {BUS_EXTRAS.wifi.name} - €{BUS_EXTRAS.wifi.price}/day
        </Checkbox>
      </FormControl>

      {/* Wheelchair Access */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='wheelchairAccess'
          name='wheelchairAccess'
          isChecked={selectedExtras.busWheelchairAccess || false}
          onChange={() =>
            handleExtraChange({
              ...selectedExtras,
              busWheelchairAccess: !selectedExtras.busWheelchairAccess
            })
          }
          style={{ fontSize: '16px' }}>
          {BUS_EXTRAS.wheelchairAccess.name} - €{BUS_EXTRAS.wheelchairAccess.price}/day
        </Checkbox>
      </FormControl>

      {/* Microphone */}
      <FormControl style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Checkbox
          id='microphone'
          name='microphone'
          isChecked={selectedExtras.busMicrophone || false}
          onChange={() =>
            handleExtraChange({
              ...selectedExtras,
              busMicrophone: !selectedExtras.busMicrophone
            })
          }
          style={{ fontSize: '16px' }}>
          {BUS_EXTRAS.microphone.name} - €{BUS_EXTRAS.microphone.price}/day
        </Checkbox>
      </FormControl>
    </>
  )
}

export default BusTabExtras
