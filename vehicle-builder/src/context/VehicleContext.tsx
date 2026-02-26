import { createContext, useState, ReactNode } from 'react'
import { TVehicle } from '../types/vehicle'

type VehicleContextType = {
  vehicleConfig: TVehicle
  setVehicleConfig: (config: TVehicle) => void
}

export const VehicleContext = createContext<VehicleContextType | undefined>(undefined)

type VehicleProviderProps = {
  children: ReactNode
}

export const VehicleProvider = ({ children }: VehicleProviderProps) => {
  const [vehicleConfig, setVehicleConfig] = useState<TVehicle>({
    type: 'car',
    carFuelType: 'petrol',
    carBatteryType: null,
    selectedBasics: {},
    selectedExtras: {},
    costPerDay: 0,
    costFixed: 0,
    costOfDeposit: 0
  })

  return (
    <VehicleContext.Provider value={{ vehicleConfig, setVehicleConfig }}>
      {children}
    </VehicleContext.Provider>
  )
}
