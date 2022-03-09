import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const travelSlice = createSlice({
  name: 'travel',
  initialState: {
    currentCity: 'Westport, Washington',
    cityList: [
      'Oahu, Hawaii',
      'Cocoa Beach, Florida',
      'Santa Cruz, California',
      'Outer Banks, North Carolina',
      'Ocean City, New Jersey',
      'Westport, Washington',
      'Lincoln City, Oregon'
    ],
    sharkAttack: false,
    travelCounter: 0,
    travelCost: {},
    deploySharkAttack: false,
  },
  reducers: {
    newCity: (state, action) => {
      state.currentCity = action.payload;
    },
    updateTravelCost: (state, action) => {
      state.travelCost = action.payload;
    },
    updateTravelCounter: (state) => {
      state.travelCounter++;
    },
    updateSharkAttack: (state, action) => {
      state.sharkAttack = action.payload;
    },
    sharkAttackChecker: (state) => {
      if (state.sharkAttack) {
        state.deploySharkAttack = true;
      }
    },
    endSharkAttack: (state) => {
      state.sharkAttack = false;
      state.deploySharkAttack = false;
    }
  }
})

export const { endSharkAttack, sharkAttackChecker, newCity, updateTravelCost, updateTravelCounter, updateSharkAttack } = travelSlice.actions;
export default travelSlice.reducer;