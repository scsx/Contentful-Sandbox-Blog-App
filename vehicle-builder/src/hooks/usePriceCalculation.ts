import { useEffect } from 'react'
import { useVehicleConfig } from './useVehicleConfig'
import {
  CAR_BASICS,
  CAR_EXTRAS,
  BOAT_BASICS,
  BOAT_EXTRAS,
  BUS_BASICS,
  BUS_EXTRAS
} from '../utils/constants'

export const usePriceCalculation = () => {
  const { vehicleConfig, setVehicleConfig } = useVehicleConfig()

  useEffect(() => {
    let costPerDay = 0
    let costFixed = 0
    let costOfDeposit = 0

    const selectedBasics = vehicleConfig.selectedBasics || {}
    const selectedExtras = vehicleConfig.selectedExtras || {}

    // Calcular baseado no tipo de veículo
    if (vehicleConfig.type === 'car') {
      // Daily price baseado na tier selecionada
      const tier = selectedBasics.carTier || 'standard'
      if (CAR_BASICS.tier.tiers[tier as keyof typeof CAR_BASICS.tier.tiers]) {
        costPerDay = CAR_BASICS.tier.tiers[tier as keyof typeof CAR_BASICS.tier.tiers].price
      }

      // Fixed costs
      if (selectedBasics.carAndBusTolls) {
        costFixed += CAR_BASICS.tolls.price
      }

      // Deposit
      if (selectedBasics.deposit) {
        costOfDeposit = CAR_BASICS.deposit.price
      }

      // Extras (daily)
      if (selectedExtras.carGps) costPerDay += CAR_EXTRAS.gps.price
      if (selectedExtras.carChildSeat) costPerDay += CAR_EXTRAS.childSeat.price
      if (selectedExtras.carDashCam) costPerDay += CAR_EXTRAS.dashCam.price
      if (selectedExtras.carExtraDriver) costPerDay += CAR_EXTRAS.extraDriver.price
    } else if (vehicleConfig.type === 'boat') {
      costPerDay = 100 // Base price for boat

      // Fixed costs
      if (selectedBasics.boatMarinaFee) {
        costFixed += BOAT_BASICS.marinaFee.price
      }
      if (selectedBasics.boatHarborPermit) {
        costFixed += BOAT_BASICS.harborPermit.price
      }
      if (selectedBasics.boatCleaningFee) {
        costFixed += BOAT_BASICS.cleaningFee.price
      }

      // Deposit
      if (selectedBasics.deposit) {
        costOfDeposit = BOAT_BASICS.deposit.price
      }

      // Extras (daily)
      if (selectedExtras.boatSkipper) costPerDay += BOAT_EXTRAS.skipper.price
      if (selectedExtras.boatFuelIncluded) costPerDay += BOAT_EXTRAS.fuelIncluded.price
      if (selectedExtras.boatInsurance) costPerDay += BOAT_EXTRAS.insurance.price
      if (selectedExtras.boatWaterSports) costPerDay += BOAT_EXTRAS.waterSports.price
      if (selectedExtras.boatCrew) costPerDay += BOAT_EXTRAS.crew.price
      if (selectedExtras.boatSafetyKit) costPerDay += BOAT_EXTRAS.safetyKit.price
    } else if (vehicleConfig.type === 'bus') {
      costPerDay = 150 // Base price for bus

      // Fixed costs
      if (selectedBasics.carAndBusTolls) {
        costFixed += BUS_BASICS.tolls.price
      }
      if (selectedBasics.busDriverClearance) {
        costFixed += BUS_BASICS.driverClearance.price
      }
      if (selectedBasics.busPassengers) {
        costFixed += selectedBasics.busPassengers * BUS_BASICS.passengers.price
      }

      // Deposit
      if (selectedBasics.deposit) {
        costOfDeposit = BUS_BASICS.deposit.price
      }

      // Extras (daily)
      if (selectedExtras.busGuide) costPerDay += BUS_EXTRAS.guide.price
      if (selectedExtras.busWifi) costPerDay += BUS_EXTRAS.wifi.price
      if (selectedExtras.busWheelchairAccess) costPerDay += BUS_EXTRAS.wheelchairAccess.price
      if (selectedExtras.busMicrophone) costPerDay += BUS_EXTRAS.microphone.price
    }

    // Atualizar config com os novos preços
    if (
      costPerDay !== vehicleConfig.costPerDay ||
      costFixed !== vehicleConfig.costFixed ||
      costOfDeposit !== vehicleConfig.costOfDeposit
    ) {
      setVehicleConfig({
        ...vehicleConfig,
        costPerDay,
        costFixed,
        costOfDeposit
      })
    }
  }, [
    vehicleConfig.selectedBasics,
    vehicleConfig.selectedExtras,
    vehicleConfig.type,
    setVehicleConfig
  ])
}
