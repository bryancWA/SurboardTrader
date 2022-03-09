import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { payCredit } from './counterSlice';

const Counter = () => {
  const { money, credit } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [ creditInput, setCreditInput ] = useState(0);

  const creditPaymentHandler = (event) => {
    event.preventDefault();
    dispatch(payCredit(creditInput));
  }

  const style = {
    'border': '2px solid black',
    'padding': '25px 25px',
  }

  return (
    <div style={style}>
      <h3>Total Money: {money}</h3>
      <h3>Credit Amount: {credit}</h3>
      <form>
        <label htmlFor="payCredit"/>
        <input name="payCredit" type="text" value={creditInput} onChange={(e) => setCreditInput(e.target.value)}/>
        <button onClick={(e) => creditPaymentHandler(e)}>Pay Credit</button>
      </form>
    </div>
  )
}

export default Counter;