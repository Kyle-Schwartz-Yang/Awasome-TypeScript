# Сужения типов (Narrowing

- [[Type Guards]] - Використовується для звуження  
- Unions Types - Використовується для звуження 

### Использование Union типа с Narrowing

> 💡 **Narrowing** — сужение типа до одного из вариантов **[[Union Types]]** (это весь механизм) Все что нужно знать о narrowing (сужении)
> ---
- **[[Union Types]]** — это способ указать, что переменная может иметь несколько типов. Он представляет собой объединение типов, позволяя переменной быть одним из нескольких типов.
- **Narrowing** — это механизм сужения типа, который `TypeScript` использует для определения конкретного типа переменной из объединённого типа во время выполнения программы на основе условий или проверок.

> При использовании **[[Union Types]]** в аргументах функции может возникнуть ситуация, когда нам нужно выполнить разные операции в зависимости от типа данных. 
> Для этого нужно **сузить типы** (narrowing), используя, например, оператор `typeof`:

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

