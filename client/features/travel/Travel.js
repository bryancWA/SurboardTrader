import React, { useState, useEffect } from 'react';
import { newCity, updateTravelCounter, updateSharkAttack, sharkAttackChecker } from './travelSlice';
import { travelDecrement, check_credit } from '../counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import  sharkAttack from './sharkAttackGenerator';

const Travel = () => {
  const travelState = useSelector((state) => state.travel);
  const creditCheck = useSelector((state) => state.counter.creditCheck);
  const currentCity = travelState.currentCity;
  const cityList = travelState.cityList;
  const travelCost = travelState.travelCost;
  const travelCounter = travelState.travelCounter
  const dispatch = useDispatch();

  const [ cityArr, setCityArr ] = useState([]);
  const [ selectedNewCity, setSelectedNewCity ] = useState('');

  const citySelectHandler = (event) => {
    event.preventDefault();
    dispatch(travelDecrement(travelCost[selectedNewCity]));
    dispatch(newCity(selectedNewCity));
    dispatch(updateTravelCounter());
    dispatch(updateSharkAttack(sharkAttack(travelCounter, creditCheck)));
    dispatch(check_credit());
    if (travelCounter > 5) {
      dispatch(sharkAttackChecker());
    }
  }

  useEffect(() => {
    let tempArr = [];
    tempArr = cityList.filter((city) => {
      if (city !== currentCity) return city;
    })
    setCityArr(tempArr);
  }, [currentCity])

  const style = {
    'border': '2px solid black',
    'padding': '25px 25px'
  }

  return (
    <div style={style}>
      <h3 style={{"textDecoration": 'Underline'}}>Travel</h3>
      <select value={selectedNewCity} onChange={(e) => setSelectedNewCity(e.target.value)}>
        <option> - </option>
        {cityArr.length > 0 ? cityArr.map((city, idx) => (
          <option value={city} key={idx}>{city}</option>
        )) : null }
      </select>
      <button onClick={(e) => citySelectHandler(e)}>Travel</button>
    </div>
  )
}

export default Travel;