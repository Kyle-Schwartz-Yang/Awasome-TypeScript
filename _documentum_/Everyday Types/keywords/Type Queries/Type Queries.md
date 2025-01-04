---
tags:
  - Querues
  - Запроси_типу
  - Запросы_типа
---

----
### Запросы типа: 

> Он необходим, когда мы четко понимаем, какой тип нам нужен в этой ситуации и он нигде не будет дальше повторяться. Це використовуэется тод! коли ми розум!эмо що це буде використовуватися лище один раз. *В !нших випадках краще використати `interface` aбо `type

- Реализуется через оператор `typeof` + сущность

```ts
  let originalNumber: number = 42;
  let anotherNumber: typeof originalNumber; // Тип anotherNumber буде number
```

---

### Коли використовувати Type Query ?

- Вы хотите использовать один и тот же тип данных в разных частях приложения.
- Вы хотите уменьшить повторение кода, когда тип уже где-то определён, и не нужно создавать его вручную.
- Вы хотите автоматически подстраивать типы, если изменится тип переменной или функции.

---

### Зміна використовує Type Query

- Мы сначала определяем переменную userName, которая имеет тип string.
- Теперь `UserNameType` можно использовать как обычный тип, и он всегда будет иметь тот же тип, что и `userName`.

```ts
let userName = "John"; // переменная типа string
type UserNameType = typeof userName; // новый тип UserNameType со значением string

// теперь можно использовать UserNameType как тип для других переменных
let anotherUserName: UserNameType = "Alice"; // строка, как и userName
```

<!-- ------------------------------------------------------------------------------------ -->

### Для Об'єктів : type query

```ts
const user = {
  name: "Alice",
  age: 25,
};

type UserType = typeof user;

// теперь UserType можно использовать для других объектов с такой же структурой
const anotherUser: UserType = {
  name: "Bob",
  age: 30,
};
```

<!-- ------------------------------------------------------------------------------------ -->

### Для функции

```ts
//# Пример с функцией : Аргумент будет только string и возвращать функция будет string
function greet(name: string): string {
  return `Hello, ${name}`;
}

type GreetFunctionType = typeof greet;

const anotherGreet: GreetFunctionType = (name) => `Hi, ${name}`;
```

```ts
const user = {
  name: "Alice",
  age: 25,
};

function checkUser(data: type user): boolean {
//.....
}
```
