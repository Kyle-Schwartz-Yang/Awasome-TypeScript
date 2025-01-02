export {}





/* 
 Пользовательнский type guards.
 По сути проверяет число это или нет.
*/

function isNumber (arg: unknown): arg is number {
  return typeof arg === 'number';
}


// Воможно немного запутаный примерчик, но все таки 
interface Car {
  engine: string;
  wheels: number;
}

interface Ship {
  engine: string;
  sail: string;
}



/*

1. Type Predicate — это выражение pet is Car, которое указывает TypeScript, что если функция возвращает true, то переменная pet имеет тип Car.

2. Type Guard — функция isShip, использующая проверку на наличие свойства ("wheels" in pet) для уточнения типа pet. Если это свойство есть, TypeScript понимает, что объект скорее всего типа Car, поскольку Ship такого свойства не имеет.

*/

// ! function isShip : ЭТО ПО СУТИ ПОЛЬЗОВАТЕЛЬНСКИЙ TYPE GUADRS 
// #  pet is Car : ЭТО ПО СУТИ Type Predicate
function isShip(pet: Car | Ship): pet is Car {
  return "wheels" in pet // Проверка на наличие свойства sail
}

/*
- Альтернативная запись
  function isShip(pet: Car | Ship): pet is Car {
    return (car as Car).wheels !== undefine;
  }
*/


const pet: Car | Ship = { engine: 'Unknown engine', wheels: 22 };

if (isShip(pet)) {
  console.log(pet.engine, pet.wheels)
}