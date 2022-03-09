import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const inventorySlice = (createSlice({
  name: 'inventory',
  initialState: [
    {
      title: 'Used Shortboard',
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
  ],
  reducers: {
    sellInventory: (state, action) => {
      state[action.payload.index].qty -= action.payload.qty;
    },
    buyInventory: (state, action) => {
      let addedInventory = false;
      state.forEach((board) => {
        if (board.title === action.payload.board) {
          board.qty += Number(action.payload.qty);
          addedInventory = true;
        }
      })
      if (!addedInventory) {
        let tempObj = {
          title: action.payload.board,
          qty: Number(action.payload.qty),
        }
        state.push(tempObj);
      }
    },
    zeroInventoryScreen: (state) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].qty <= 0) {
          state.splice(i, 1);
        }
      }
    }
  },

}));

export const { sellInventory, buyInventory, zeroInventoryScreen } = inventorySlice.actions;
export default inventorySlice.reducer;