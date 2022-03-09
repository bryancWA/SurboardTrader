const cities = [
  {
    id: 1,
    name: "Oahu, Hawaii",
    state: 'Hawaii',
    product_supply: {
      "Used Shortboard": 10,
      "Used Longboard": 10,
      "Epoxy Board": 6,
      "New Shortboard": 5,
      "New Longboard": 5,
      "Hydrofoil": 0,
      "2mm Suit": 5,
      "5mm Suit": 0,
    },
    product_demand: {
      "Used Shortboard": 0,
      "Used Longboard": 0,
      "Epoxy Board": 0,
      "New Shortboard": 0,
      "New Longboard": 0,
      "Hydrofoil": 10,
      "2mm Suit": 0,
      "5mm Suit": 0,
    },
    market_saturation: 9,
    travel_cost: {
      'Cocoa Beach, Florida': 2000,
      'Santa Cruz, California': 1000,
      'Outer Banks, North Carolina': 2100,
      'Ocean City, New Jersey': 2200,
      'Westport, Washington': 1500,
      'Lincoln City, Oregon': 1300,
    },
    wetsuit: 'none'
  },
  {
    id: 2,
    name: "Cocoa Beach, Florida",
    state: 'Florida',
    product_supply: {
      "Used Shortboard": 7,
      "Used Longboard": 7,
      "Epoxy Board": 7,
      "New Shortboard": 7,
      "New Longboard": 7,
      "Hydrofoil": 0,
      "2mm Suit": 5,
      "5mm Suit": 0,
    },
    product_demand: {
      "Used Shortboard": 3,
      "Used Longboard": 3,
      "Epoxy Board": 3,
      "New Shortboard": 3,
      "New Longboard": 3,
      "Hydrofoil": 0,
      "2mm Suit": 0,
      "5mm Suit": 0,

    },
    market_saturation: 7,
    travel_cost: {
      'Oahu, Hawaii': 2000,
      'Santa Cruz, California': 1000,
      'Outer Banks, North Carolina': 300,
      'Ocean City, New Jersey': 600,
      'Westport, Washington': 1500,
      'Lincoln City, Oregon': 1300,
    },
    wetsuit: 'none'
  },
  {
    id: 3,
    name: "Outer Banks, North Carolina",
    state: 'North Carolina',
    product_supply: {
      "Used Shortboard": 3,
      "Used Longboard": 2,
      "Epoxy Board": 3,
      "New Shortboard": 5,
      "New Longboard": 1,
      "Hydrofoil": 0,
      "2mm Suit": 0,
      "5mm Suit": 5,
    },
    product_demand: {
      "Used Shortboard": 7,
      "Used Longboard": 0,
      "Epoxy Board": 5,
      "New Shortboard": 5,
      "New Longboard": 0,
      "Hydrofoil": 0,
      "2mm Suit": 10,
      "5mm Suit": 0,
    },
    market_saturation: 6,
    travel_cost: {
      'Oahu, Hawaii': 1900,
      'Santa Cruz, California': 1100,
      'Cocoa Beach, Florida': 300,
      'Ocean City, New Jersey': 300,
      'Westport, Washington': 1100,
      'Lincoln City, Oregon': 900,
    },
    wetsuit: '2mm Suit'
  },
  {
    id: 4,
    name: 'Ocean City, New Jersey',
    state: 'New Jersey',
    product_supply: {
      "Used Shortboard": 4,
      "Used Longboard": 5,
      "Epoxy Board": 6,
      "New Shortboard": 5,
      "New Longboard": 6,
      "Hydrofoil": 0,
      "2mm Suit": 5,
      "5mm Suit": 0,
    },
    product_demand: {
      "Used Shortboard": 6,
      "Used Longboard": 0,
      "Epoxy Board": 6,
      "New Shortboard": 6,
      "New Longboard": 0,
      "Hydrofoil": 0,
      "2mm Suit": 0,
      "5mm Suit": 10,
    },
    market_saturation: 5,
    travel_cost: {
      'Oahu, Hawaii': 2100,
      'Santa Cruz, California': 1300,
      'Cocoa Beach, Florida': 600,
      'Outer Banks, North Carolina': 300,
      'Westport, Washington': 900,
      'Lincoln City, Oregon': 1100,
    },
    westsuit: '5mm Suit'
  },
  {
    id: 5,
    name: 'Westport, Washington',
    state: 'Washington',
    product_supply: {
      "Used Shortboard": 2,
      "Used Longboard": 2,
      "Epoxy Board": 2,
      "New Shortboard": 2,
      "New Longboard": 2,
      "Hydrofoil": 8,
      "2mm Suit": 8,
      "5mm Suit": 0,
    },
    product_demand: {
      "Used Shortboard": 8,
      "Used Longboard": 8,
      "Epoxy Board": 8,
      "New Shortboard": 8,
      "New Longboard": 8,
      "Hydrofoil": 0,
      "2mm Suit": 0,
      "5mm Suit": 8,
    },
    market_saturation: 2,
    travel_cost: {
      'Oahu, Hawaii': 1300,
      'Santa Cruz, California': 400,
      'Cocoa Beach, Florida': 1300,
      'Ocean City, New Jersey': 900,
      'Outer Banks, North Carolina': 1100,
      'Lincoln City, Oregon': 200,
    },
    westsuit: '5mm Suit'
  },
  {
    id: 6,
    name: 'Lincoln City, Oregon',
    state: 'Oregon',
    product_supply: {
      "Used Shortboard": 3,
      "Used Longboard": 3,
      "Epoxy Board": 3,
      "New Shortboard": 3,
      "New Longboard": 3,
      "Hydrofoil": 0,
      "2mm Suit": 3,
      "5mm Suit": 0,
    },
    product_demand: {
      "Used Shortboard": 7,
      "Used Longboard": 7,
      "Epoxy Board": 7,
      "New Shortboard": 7,
      "New Longboard": 7,
      "Hydrofoil": 0,
      "2mm Suit": 0,
      "5mm Suit": 7,
    },
    market_saturation: 3,
    travel_cost: {
      'Oahu, Hawaii': 1300,
      'Santa Cruz, California': 200,
      'Cocoa Beach, Florida': 1300,
      'Ocean City, New Jersey': 900,
      'Westport, Washington': 200,
      'Outer Banks, North Carolina': 1100,
    },
    westsuit: '5mm Suit'
  },
  {
    id: 7,
    name: 'Santa Cruz, California',
    state: 'California',
    product_supply: {
      "Used Shortboard": 8,
      "Used Longboard": 8,
      "Epoxy Board": 8,
      "New Shortboard": 8,
      "New Longboard": 8,
      "Hydrofoil": 0,
      "2mm Suit": 5,
      "5mm Suit": 8,
    },
    product_demand: {
      "Used Shortboard": 2,
      "Used Longboard": 0,
      "Epoxy Board": 0,
      "New Shortboard": 2,
      "New Longboard": 0,
      "Hydrofoil": 0,
      "2mm Suit": 0,
      "5mm Suit": 0,
    },
    market_saturation: 8,
    travel_cost: {
      'Oahu, Hawaii': 1000,
      'Outer Banks, North Carolina': 700,
      'Cocoa Beach, Florida': 1000,
      'Ocean City, New Jersey': 900,
      'Westport, Washington': 400,
      'Lincoln City, Oregon': 200,
    },
    westsuit: 'none'
  }
]

const initialState = [
  {
    title: 'Used Surfboard',
    qty: 10,
  },
  {
    title: 'Used Longboard',
    qty: 10,
  },
  {
    title: 'Epoxy Board',
    qty: 10,
  },
  {
    title: 'Hydrofoil',
    qty: 0,
  }
];

module.exports = {
  initialState: initialState,
  cities: cities,
}