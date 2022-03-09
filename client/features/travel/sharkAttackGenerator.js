const randoNum = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
}

const sharkAttack = (travelCount, creditCheck) => {
  let bool = false;
  let maxNum = travelCount * 3;
  if (creditCheck) {
    maxNum /= 2;
    let result = randoNum(maxNum);
    if (result === travelCount) {
      bool = true;
    }
  } else {
    let result = randoNum(maxNum);
    if (result === travelCount) {
      bool = true;
    }
  }
  return bool;
}

export default sharkAttack;