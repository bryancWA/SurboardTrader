import React from 'react';
import Counter from './features/counter/Counter';
import Inventory from './features/inventory/Inventory';
import Travel from './features/travel/Travel';
import BuyInventory from './features/buy/BuyInventory';
import SharkAttack from './features/sharkAttack/SharkAttack';

const App = ({store}) => {


  return (
    <div>
      <Counter />
      <Inventory />
      <BuyInventory />
      <Travel />
      <SharkAttack />
    </div>
  )
}

export default App;