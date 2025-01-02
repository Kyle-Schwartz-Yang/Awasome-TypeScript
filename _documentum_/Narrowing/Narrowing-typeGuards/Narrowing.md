# Механизм Сужения типов (Narrowing)

> eng.Narrowing === 'сужение'

<a><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"> </a>

1. **Union Type** — _это способ указать, что переменная может иметь несколько типов. Он представляет собой объединение типов, позволяя переменной быть одним из нескольких типов._

2. **Narrowing** — _это механизм сужения типа, который `TypeScript` использует для определения конкретного типа переменной из объединённого типа во время выполнения программы на основе условий или проверок._

### Использование Union типа с Narrowing

> <p>💡 <strong>Narrowing</strong> — сужение типа до одного из вариантов Union (это весь механизм) Все что нужно знать о narrowing (сужении)</p>

> При использовании **union типа** в аргументах функции может возникнуть ситуация, когда нам нужно выполнить разные операции в зависимости от типа данных. Для этого нужно **сузить типы** (narrowing), используя, например, оператор `typeof`:

```typescript
function handleValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Сработает, если value — строка
  } else {
    console.log(value + 1); // Сработает, если value — число
  }
}
```

<!-- ----------------------------------------------------------------- -->
<hr>
<!-- ----------------------------------------------------------------- -->

# _TypeScript Narrowing Examples_

> В целом это все что нужно знать ! (Учитывая что очень большое разнообразие Union Type это плохо, то этого прримера больше чем достаточно, для ознакомления добавлю еще парочку)

<a><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"> </a>

- Сужение с помощью проверки на истинность

```typescript
function printLength(str: string | null) {
  if (str) {
    console.log(str.length); // Здесь str точно не null
  } else {
    console.log("It's null or empty string");
  }
}
```

- Сужение с instanceof

```typescript
class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Fish {
  swim() {
    console.log("Fish is swimming");
  }
}

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

- Сужение с помощью in оператора

```typescript
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };

function printEmployeeInformation(emp: Admin | Employee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
```

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
