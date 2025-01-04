## `Type Guards в TypeScript` — это инструменты, которые позволяют сужать (`narrowing`)

- Проверка с помощью `typeof`

```ts
function example(value: string | number) {
  if (typeof value === "string") {
    // value: string
  } else {
    // value: number
  }
}
```

- Условные проверки с `in`

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

- Использование `instanceof Type Guards`

```ts
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // animal: Dog
  } else {
    animal.meow(); // animal: Cat
  }
}
```

- Пользовательские `Type Guards`

> `pet is Dog` эта запись говорит что аргумент pet должен совпадать с Dog

```ts
interface Dog {
  bark: () => void;
}

interface Cat {
  meow: () => void;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

const pet: Dog | Cat = { bark: () => console.log("Woof") };

if (isDog(pet)) {
  pet.bark(); // Теперь TypeScript знает, что это Dog
} else {
  pet.meow(); // Здесь TypeScript знает, что это Cat
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
