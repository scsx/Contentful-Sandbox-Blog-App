export type TVehicle = {
  type: 'car' | 'bus' | 'boat'
  carFuelType?: 'petrol' | 'diesel' | 'electric' | null
  carBatteryType?: 'Lithium-NMC' | 'Sodium-ion' | 'NiMH' | null

  // Basics (one-time fees or deposits)
  selectedBasics?: {
    deposit?: boolean
    boatMarinaFee?: boolean // boat only
    boatHarborPermit?: boolean // boat only
    boatCleaningFee?: boolean // boat only
    carAndBusTolls?: boolean // car, bus
    carTier?: 'economy' | 'standard' | 'family' | 'luxury' // car only
    busDriverClearance?: boolean // bus only
    busPassengers?: number // bus only
  }

  // Extras (daily add-ons)
  selectedExtras?: {
    // Boat extras
    boatSkipper?: boolean
    boatFuelIncluded?: boolean
    boatInsurance?: boolean
    boatWaterSports?: boolean
    boatCrew?: boolean
    boatSafetyKit?: boolean

    // Car extras
    carGps?: boolean
    carChildSeat?: boolean
    carDashCam?: boolean
    carExtraDriver?: boolean

    // Bus extras
    busGuide?: boolean
    busWifi?: boolean
    busWheelchairAccess?: boolean
    busMicrophone?: boolean
  }

  costPerDay: number
  costFixed: number
  costOfDeposit: number
}
