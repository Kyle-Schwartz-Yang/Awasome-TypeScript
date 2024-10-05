# Механизм Сужения типов (Narrowing)
> eng.Narrowing === 'сужение'
1. **Union Type** — *это способ указать, что переменная может иметь несколько типов. Он представляет собой объединение типов, позволяя переменной быть одним из нескольких типов.*

2. **Narrowing** — *это механизм сужения типа, который `TypeScript` использует для определения конкретного типа переменной из объединённого типа во время выполнения программы на основе условий или проверок.*

### Использование Union типа с Narrowing

- Narrowing — сужение типа до одного из вариантов Union (это весь механизм)


> При использовании **union типа** в аргументах функции может возникнуть ситуация, когда нам нужно выполнить разные операции в зависимости от типа данных. Для этого нужно **сузить типы** (narrowing), используя, например, оператор `typeof`:


 ```typescript
  function handleValue(value: string | number) {
   if (typeof value === 'string') {
   console.log(value.toUpperCase()); // Сработает, если value — строка
   } else {
   console.log(value + 1);           // Сработает, если value — число
   }
 }
 ```
> В целом это все что нужно знать ! (Учитывая что очень большое разнообразие Union Type это плохо, то этого прримера больше чем достаточно, для ознакомления добавлю еще парочку)

<!-- ----------------------------------------------------------------- -->
<hr>
<!-- ----------------------------------------------------------------- -->

# *TypeScript Narrowing Examples*

```typescript


// 2. Сужение с помощью проверки на истинность
function printLength(str: string | null) {
    if (str) {
        console.log(str.length);  // Здесь str точно не null
    } else {
        console.log("It's null or empty string");
    }
}

// 3. Сужение с instanceof
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

// 4. Сужение с помощью in оператора
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