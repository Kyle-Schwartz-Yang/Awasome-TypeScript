---
tags:
  - guards
  - type_guards
  - narrowing
---

> `Type Guards` — это конструкции, которые позволяют вам проверять тип переменной во время выполнения и «защищают» от неправильных предположений о типах. Когда вы используете `Type Guards`, вы фактически выполняете `narrowing`, так как уточняете тип переменной на основе проверок.

- `Type Guards` и `Narrowing` в TypeScript действительно тесно связаны, но они не идентичны.
- `Type Guards` — это конструкции, которые помогают уточнить (или «защитить») тип переменной во время выполнения.
- `Narrowing` — это процесс сужения типа на основе этих проверок.


1. Проверка типа с помощью `typeof`:

```ts

  function processValue(value: string | number) {
    if (typeof value === "string") {
      // Здесь TypeScript знает, что value — это string
      console.log(value.toUpperCase());
    } else {
      // Здесь TypeScript знает, что value — это number
      console.log(value.toFixed(2));
    }
  }

```

2. Проверка типа с помощью `instanceof Type Guards`

```ts

  class Animal {
    move() {
      console.log("Moving along!");
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }

  function makeSound(animal: Animal) {
    if (animal instanceof Dog) {
      animal.bark(); // Здесь TypeScript знает, что animal — это Dog
    } else {
      animal.move(); // Здесь animal — это Animal
    }
  }

```

3. Пользовательские `Type Guards`: *Вы можете создать свою функцию type guard, которая возвращает значение типа, например:*

```ts

  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  const example: unknown = "Hello!";
  if (isString(example)) {
    console.log(example.length); // Здесь TypeScript знает, что это строка
  }

```

4.  Умовні перевірки з `in`

```ts
interface Car {
  drive: () => void;
}

interface Bike {
  pedal: () => void;
}

function move(vehicle: Car | Bike) {
  if ("drive" in vehicle) {
    vehicle.drive(); // vehicle: Car
  } else {
    vehicle.pedal(); // vehicle: Bike
  }
}
```


- Объединения и пересечения (`Union and Intersection Types`)

```ts
type Shape = Circle | Square;

function area(shape: Shape) {
  if ("radius" in shape) {
    // shape: Circle
  } else {
    // shape: Square
  }
}
```
