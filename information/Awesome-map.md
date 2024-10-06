
<hr>
  <a href="https://www.typescriptlang.org/docs/" target="_blank">
    <img alt="Static Badge" src="https://img.shields.io/badge/Documentation-%232a7aef?style=flat&logo=typescript&logoColor=%23fff&labelColor=%23000000">

  </a>
<hr>


# 🧩 Theme typescript

### `Functions` : *Аннотация для функции*

- 🔗 [Theme/ Functions](../Awesome/functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)
  
### `Array` : *Аннотация для массивов*

- 🔗 [Theme/ Functions](../Awesome/functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)


### `Object` : *Аннотация для объектов*

- 🔗 [Theme/ Functions](../Awesome/functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)

### `Tuples` : *Кортежи*

- 🔗 [Theme/ Functions](../Awesome/functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)

### `Narrowing` : *Механизм сужения типов*  

- 🔗 [Theme/ Narrowing](../Awesome/Narrowing/Narrowing.md)
- 🔗 [off.Докуметация](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)



# 🧩 Types annotations

### Types :any - это дословно «любое значение». 💡
- [types/ `any`](../Awesome/types/any/type-any.md)

### Types bigint and Symbol - bigint требуется настройки (tsconfig) 💡
- [types/ `bigint and Symbol`](../Awesome/types/bigintxSymbol/info.md)

### Неизменное значение литерала: `let msg: 'Hello World' = 'Hello World'`
- [types/ `literal`](../Awesome/types/literal/literal.md)


### Бескнечные/Ошибка функции возвращают `type :never`
- [types/ `never`](../Awesome/types/never/type-never.md)

### Types null / undefined 
- [types/ `null and undefined`](../Awesome/types/nullxUndefined/info.md)
```TypeScript
const smth: null = null; // null 👌
const smth: any = null; // null 👌
const smth: string = null; // error
const smth: number = null; // error
// ---------------------------------------------
const smth: undefined = undefined; // undefined 👌
const smth: any = undefined; // undefined 👌
const smth: string = undefined; // error
const smth: number = undefined; // error
```

### Union объединяет несколько типов в один.
- [types/ `union`](../Awesome/types/union/union.md)

```typescript
  function showMsgUnion(msg: string | number): void {
    console.log(msg);
  }
  showMsgUnion('Строка');
  showMsgUnion('Число');
```












