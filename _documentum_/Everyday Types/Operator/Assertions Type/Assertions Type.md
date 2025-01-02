

> Type assertion в TypeScript — это способ явно указать тип переменной или выражения, чтобы дать компилятору знать, что мы уверены в типе данных, даже если TypeScript не может определить это сам

- В TypeScript есть два синтаксиса для приведения типов (type assertion):

### Синтаксис через as:

```ts
// as
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(strLength);
```

### Синтаксис через угловые скобки:

> Используя этот синтаксис можно получить конфликт по скобкам (например React):

```ts
// <>
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (<string>someValue).length;
```

### Утвердить как Объект литерального типа

> Напоминание! Если переменная с примитивом создается без аннотации и через const, то вывод типов присваивает ей литеральный тип.

```ts
// Утвердить объект литеральным типом
const obj = {
  name: "Alice",
  age: 25,
} as const;

// Утвердить литерал для конкретного значения.
const obj = {
  name: "Alice" as "Alice",
  age: 25,
};
```

### Утвержнение DOM-дерева

- Важно помнить, что элемент может быть не найден на странице, так что использование различных конструкций
  по предотвращению ошибок обязательно (`try/catch`, `if` и тп.)

> Уточнить с каким элементом мы работает.

```ts

const menu = document.querySelector(".menu") as HTMLElement;
const input = document.querySelector("input") as HTMLInputElement;
// Альтернативный синтаксис (отстойный)
const inout <HTMLInputElement>document.querySelector("input");

```
