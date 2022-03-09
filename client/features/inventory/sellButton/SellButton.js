import React, { useState } from 'react';
import { sellIncrement } from '../../counter/counterSlice';
import { useDispatch } from 'react-redux';
import { zeroInventoryScreen } from '../inventorySlice';

const SellButton = ({ price, idx, passEnteredQty }) => {
  const dispatch = useDispatch();
  const [enteredQty, setEnteredQty] = useState(0);

  const totalSale = (salePrice, num) => {
    return salePrice * num;
  }

  const qtyHandler = (e) => {
    e.preventDefault();
    let obj = {
      index: idx,
      qty: enteredQty,
    };
    passEnteredQty(obj);
    dispatch(sellIncrement(totalSale(price, enteredQty)));
    dispatch(zeroInventoryScreen());
  }

return (
  <form >
    <label htmlFor="qtyInput">Qty</label>
    <input type="text" name="qtyInput" value={enteredQty} onChange={(event) => setEnteredQty(event.target.value)}/>
    <button onClick={(e) => qtyHandler(e)}>Sell</button>
  </form>
)

}

export default SellButton;