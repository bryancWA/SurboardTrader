import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import inventoryReducer from './features/inventory/inventorySlice';
import travelReducer from './features/travel/travelSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    inventory: inventoryReducer,
    travel: travelReducer,
  },
});
