const randoPrice = (board) => {
  let deviation;
  switch (board) {
    case 'Used Shortboard':
      deviation = Math.floor(Math.random() * 20);
      return 200 - deviation;
    case 'Used Longboard':
      deviation = Math.floor(Math.random() * 20);
      return 250 - deviation;
    case 'Epoxy Board':
      deviation = Math.floor(Math.random() * 50);
      return 500 - deviation;
    case 'New Shortboard':
      deviation = Math.floor(Math.random() * 75);
      return 800 - deviation;
    case 'New Longboard':
      deviation = Math.floor(Math.random() * 100);
      return 900 - deviation;
    case 'Hydrofoil':
      deviation = Math.floor(Math.random() * 500);
      return 2500 - deviation;
    case '2mm Suit':
      deviation = Math.floor(Math.random() * 10);
      return 100 - deviation;
    case '5mm Suit':
      deviation = Math.floor(Math.random() * 15);
      return 150 - deviation;
    default:
      console.log('inconsistent data being compared');
      break;
  }
}


const priceGenerator = (boardListObj) => {
  let priceObj = {};
  for (let key in boardListObj) {
    let price = randoPrice(key);
    priceObj[key] = price;
  }
  return priceObj;
}


export default priceGenerator;