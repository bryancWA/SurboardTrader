import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellInventory, buyInventory } from './inventorySlice';
import SellButton from './sellButton/SellButton';


const Inventory = () => {
  const currentInventory = useSelector((state) => state.inventory);
  const currentPriceObj = useSelector((state) => state.counter.currentPrice);
  const dispatch = useDispatch();


  const passEnteredQty = (obj) => {
    dispatch(sellInventory(obj))
  }
  
  const style = {
    'border': '2px solid black',
    'padding': '25px 25px',
  }


  return (
    <div style={style}>
      <h3 style={{"textDecoration": 'Underline'}}>My Inventory</h3>
      {currentInventory.map((surfboard, idx) => (
        <div key={idx}>
          <h4>{`Current ${surfboard.title} Inventory: ${surfboard.qty} @ ${currentPriceObj[surfboard.title]}`}</h4>
          <SellButton price={currentPriceObj[surfboard.title]} idx={idx} passEnteredQty={passEnteredQty}/>
        </div>
      ))}

    </div>
  )

}

export default Inventory;