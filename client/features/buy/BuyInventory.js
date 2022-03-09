import React, { useEffect, useState } from 'react';
import { buyInventory } from '../inventory/inventorySlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import BuyButton from './buyButton/BuyButton';
import { updateTravelCost } from '../travel/travelSlice';
import priceGenerator from './priceGenerator';
import { setCurrentPrice } from '../counter/counterSlice';


const BuyInventory = () => {
  const currentCity = useSelector((state) => state.travel.currentCity)
  const currentPriceObj = useSelector((state) => state.counter.currentPrice)
  const dispatch = useDispatch();



  const [ inventoryArr, setInventoryArr ] = useState([]);
  const [ inventoryPriceObj, setInventoryPriceObj ] = useState(currentPriceObj || {})
 
  
  const zeroInventoryCheck = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].qty <= 0) {
        arr.splice(i, 1);
      }
    }
  }

  const modifyLocalStateInventory = (obj) => {
    let tempArr = [...inventoryArr];
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].name === obj.board) {
        tempArr[i].qty -= obj.qty;
        break;
      }
    }
    zeroInventoryCheck(tempArr);
    setInventoryArr(tempArr);
  }

  const passEnteredQty = (obj) => {
    modifyLocalStateInventory(obj)
    dispatch(buyInventory(obj))
  }

  

  useEffect(() => {
    axios.get(`/city`)
      .then((res) => {
        let tempArr = res.data.filter(city => city.name === currentCity)
        let obj = tempArr[0];
        dispatch(setCurrentPrice(priceGenerator(obj.product_supply)));
        dispatch(updateTravelCost(obj.travel_cost));
        let tempArrTwo = [];
        for (let key in obj.product_supply) {
          if (obj.product_supply[key] > 0) {
            let tempObj = {
              name: key,
              qty: obj.product_supply[key],
            };
            tempArrTwo.push(tempObj);
          }
        };
        setInventoryArr(tempArrTwo);
      })
      .catch((e) => {
        console.log('error in city inventory get request', e);
      })
  }, [currentCity])

  useEffect(() => setInventoryPriceObj(currentPriceObj), [currentPriceObj]);

  const style = {
    'border': '2px solid black',
    'padding': '25px 25px'
  }


  return (
    <div style={style}>
      <h3 style={{"textDecoration": 'Underline'}}>{`${currentCity} Inventory`}</h3>
      {inventoryArr.length > 0 ? inventoryArr.map((board, idx) => (
        <div key={idx}>
          <h4>{`There are ${board.qty} of the ${board.name} @ ${inventoryPriceObj[board.name]}`}</h4>
          <BuyButton boardPrice={inventoryPriceObj[board.name]} totalQty={board.qty} boardName={board.name} passEnteredQty={passEnteredQty}/>
        </div>
      )) : null }
    </div>
  )
}

export default BuyInventory;