import { useContext } from 'react'
import { VehicleContext } from '../context/VehicleContext'

export const useVehicleConfig = () => {
  const context = useContext(VehicleContext)

  if (!context) {
    throw new Error('useVehicleConfig must be used within VehicleProvider')
  }

  return context
}
