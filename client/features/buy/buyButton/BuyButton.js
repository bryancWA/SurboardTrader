import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyDecrement } from '../../counter/counterSlice';

const BuyButton = ({ boardPrice, totalQty, boardName, passEnteredQty }) => {
  const [enteredQty, setEnteredQty ] = useState(0);
  const dispatch = useDispatch();

  const qtyHandler = (e) => {
    e.preventDefault();
    if (totalQty >= enteredQty) {
      let obj = {
      board: boardName,
      qty: enteredQty,
      }
      dispatch(buyDecrement(boardPrice));
      passEnteredQty(obj);
      setEnteredQty(0);
    } else {
      alert('You can\'t buy more than the store contains')
    }
  } 

  return (
    <form>
      <label htmlFor='buyQtyInput'>
        <input type="text" value={enteredQty} onChange={(e) => setEnteredQty(e.target.value)} placeholder="Enter Quantity"/>
      </label>
      <button onClick={(e) => qtyHandler(e)}>Buy</button>
    </form>
  )
}

export default BuyButton;