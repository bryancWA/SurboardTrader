import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', 
  initialState: {
    money: 1500,
    credit: -1500,
    creditCheck: true,
    currentPrice: {},
  },
  reducers: {
    sellIncrement: (state, action) => {
      state.money += action.payload
    },
    buyDecrement: (state, action) => {
      state.money -= Number(action.payload);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    travelDecrement: (state, action) => {
      state.money -= action.payload
    },
    payCredit: (state, action) => {
      let num = Number(action.payload);
      state.money -= num;
      state.credit += num;
    },
    setCurrentPrice: (state, action) => {
      state.currentPrice = action.payload;
    }, 
    check_credit: (state) => {
      state.credit = Math.min(state.credit, 0);
      if (state.credit >= 0) {
        state.creditCheck = false;
      } else {
        state.creditCheck = true;
      }
    }
  },
});

export const {  check_credit, sellIncrement, buyDecrement, incrementByAmount, travelDecrement, payCredit, setCurrentPrice } = counterSlice.actions

export default counterSlice.reducer;