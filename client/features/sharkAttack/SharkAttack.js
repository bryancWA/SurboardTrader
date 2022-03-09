import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { endSharkAttack } from '../travel/travelSlice';

const SharkAttack = () => {
  const deploySharkAttack = useSelector((state) => state.travel.deploySharkAttack)
  const dispatch = useDispatch();

  const ModalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '300px',
    height: '250px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f4f9f9',
    padding: '50px',
    zIndex: 1000,
    overflow: 'scroll',
  }

  const OverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .35)',
    zIndex: 1000,
  }


  const halfInventoryHandler = () => {
    dispatch(endSharkAttack());
  }

  const halfTotalMoneyHandler = () => {
    dispatch(endSharkAttack());
  }

  if (!deploySharkAttack) {
    return (null);
  } else {
    return ReactDOM.createPortal(
      <div style={OverlayStyle}>
        <div style={ModalStyle}>
          <h2>Shark Attack!!</h2>
          <h3>Your next destination suffered a horrible shark attack.</h3>
          <h3>Give up half your money, or half your inventory:</h3>
          <button onClick={() => halfTotalMoneyHandler()}>Half My Money</button>
          <button onClick={() => halfInventoryHandler()}>Half My Inventory</button>
        </div>
      </div>
    , document.getElementById("portal"))
  }
}

export default SharkAttack;