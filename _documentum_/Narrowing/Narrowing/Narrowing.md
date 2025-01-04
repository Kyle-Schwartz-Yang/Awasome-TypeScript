---
tags:
  - narrowing
---

### Використання типу об'єднання з обмеженням

> 💡 **Обмеження** (Narrowing) — це процес звуження типу до одного з варіантів  [[Union Types]] (це вся сутність механізму). Все, що потрібно знати про обмеження (звуження).
> 
- **[[Union Types]]** — це спосіб вказати, що змінна може мати декілька типів. Він представляє собою об'єднання типів, дозволяючи змінній бути одним із кількох типів.
- **Narrowing** — це механізм звуження типу, який `TypeScript` використовує для визначення конкретного типу змінної з об'єднаного типу під час виконання програми на основі умов або перевірок.

> Під час використання **Типів об'єднання** в аргументах функції може виникнути ситуація, коли потрібно виконувати різні операції залежно від типу даних.  
 Для цього потрібно (narrowing), використовуючи, наприклад, оператор `typeof`:

```typescript
function handleValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Сработает, если value — строка
  } else {
    console.log(value + 1); // Сработает, если value — число
  }
}
```


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

