# Type predicate

- `pet is Car` вот эта запись по сути это `Type predicate` она значит что если функция вернет `true` значит аргумет будет равен `объекту Car`

> `Type Predicate:` **`pet is Ship`** — это type predicate (предикат типа). Он указывает компилятору TypeScript, что если функция isShip возвращает true, то переменная pet может быть использована как объект типа Ship в соответствующем блоке кода.

```ts
interface Car {
  engine: string;
  wheels: number;
}

interface Ship {
  engine: string;
  sail: string;
}

function isShip(pet: Car | Ship): pet is Car {
  return "wheels" in pet; // Проверка на наличие свойства sail
}

const pet: Car | Ship = { engine: "Unknown engine", wheels: 22 };

if (isShip(pet)) {
  console.log(pet.engine, pet.wheels);
}
```
