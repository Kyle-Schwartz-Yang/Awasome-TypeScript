
//* Типизирую код
/*
const currRate = "1.05";
const fetchCurr = (responce) => {
  const data = JSON.parse(responce);
  return data;
}

function transferEurToUsd(available, amount, commission) {
  if (available) {
    let res = fetchCurr(currRate) * amount * commission;
    console.log(res);
  } else {
    console.log('Сейчас обмен недоступен');
  }
}

transferEurToUsd(true, 500, 1.05);

*/


//? Осторожно : РЕШЕНИЕ 

const currRate = "1.05";
const fetchCurr = (responce: string): number => {
  const data: number = JSON.parse(responce);
  return data;
}

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
  if (available) {
    let res = fetchCurr(currRate) * amount * commission;
    console.log(res);
  } else {
    console.log('Сейчас обмен недоступен');
  }
}

transferEurToUsd(true, 500, 1.05);


