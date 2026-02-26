export const BOAT_BASICS = {
  deposit: {
    name: 'Security Deposit',
    price: 1500,
    description: 'Refundable deposit for potential damages'
  },
  marinaFee: {
    name: 'Marina Mooring Fee',
    price: 300,
    description: 'One-time fee for marina berth and facilities',
    isFixedFee: true
  }
}

export const CAR_BASICS = {
  deposit: {
    name: 'Security Deposit',
    price: 500,
    description: 'Refundable deposit for potential damages'
  },
  tolls: {
    name: 'Toll processing fee',
    price: 80,
    description: 'One-time toll charges for highways and bridges',
    isFixedFee: true
  },
  tier: {
    name: 'Tier',
    tiers: {
      economy: {
        name: 'Economy (2pax)',
        price: 40
      },
      standard: {
        name: 'Standard (4pax)',
        price: 55
      },
      family: {
        name: 'Family (5pax + bags)',
        price: 70
      },
      luxury: {
        name: 'Luxury (2pax + bags)',
        price: 125
      }
    }
  }
}

export const ELECTRIC_CAR_BATTERY = {
  'Lithium-NMC': {
    name: 'Lithium-NMC',
    price: 5
  },
  'Sodium-ion': {
    name: 'Sodium-ion',
    price: 7
  },
  NiMH: {
    name: 'NiMH',
    price: 3
  }
}

export const BUS_BASICS = {
  deposit: {
    name: 'Security Deposit',
    price: 3000,
    description: 'Refundable deposit for potential damages'
  },
  driverClearance: {
    name: 'Driver Background Clearance',
    price: 150,
    description: 'One-time verification and admin fee',
    isFixedFee: true
  },
  tolls: {
    name: 'Toll processing fee',
    price: 160,
    description: 'One-time toll charges for highways and bridges',
    isFixedFee: true
  }
}

export const BOAT_EXTRAS = {
  skipper: {
    name: 'Professional Skipper',
    price: 200,
    description: 'Experienced skipper for navigation and safety'
  },
  fuelIncluded: {
    name: 'Fuel Included',
    price: 80,
    description: 'Full tank included with rental'
  },
  insurance: {
    name: 'Full Coverage Insurance',
    price: 50,
    description: 'Comprehensive insurance coverage'
  },
  waterSports: {
    name: 'Water Sports Equipment',
    price: 100,
    description: 'Jet skis, snorkeling gear, paddleboards'
  },
  crew: {
    name: 'Additional Crew Member',
    price: 120,
    description: 'Extra staff member for service and safety'
  },
  safetyKit: {
    name: 'Premium Safety Kit',
    price: 60,
    description: 'Advanced life jackets and emergency equipment'
  }
}

export const CAR_EXTRAS = {
  gps: {
    name: 'GPS Navigation System',
    price: 15,
    description: 'Modern satnav with real-time traffic'
  },
  childSeat: {
    name: 'Child Safety Seat',
    price: 20,
    description: 'Certified safety seat for children'
  },
  dashCam: {
    name: 'Dashboard Camera',
    price: 25,
    description: 'HD dash cam for security and insurance'
  },
  extraDriver: {
    name: 'Additional Driver',
    price: 10,
    description: 'Add registered driver to rental agreement'
  }
}

export const BUS_EXTRAS = {
  guide: {
    name: 'Professional Tour Guide',
    price: 150,
    description: 'Expert guide for group tours'
  },
  wifi: {
    name: 'WiFi Hotspot System',
    price: 40,
    description: 'Onboard WiFi for passengers'
  },
  wheelchairAccess: {
    name: 'Wheelchair Accessibility Kit',
    price: 60,
    description: 'Ramp and securing equipment'
  },
  microphone: {
    name: 'Microphone & Sound System',
    price: 35,
    description: 'PA system for announcements and presentations'
  }
}
