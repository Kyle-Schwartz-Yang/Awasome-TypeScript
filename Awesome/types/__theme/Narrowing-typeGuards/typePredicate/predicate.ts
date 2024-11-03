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