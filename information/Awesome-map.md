
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

<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>:any 📌</code></summary>
  
### Type :any - это дословно «любое значение». 💡

- 🔗 [types/ `any`](../Awesome/types/any/type-any.md)

```typescript 
  const random: any = 220; 
```

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>:bigint / Symbol 📌</code></summary>
  
### Type bigint and Symbol (Обычное определение) 💡

- 🔗 [types/ `bigint and Symbol`](../Awesome/types/bigintxSymbol/info.md)

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>:type Literal 📌</code></summary>
  
### `Type literal` Фиксирует конкретное значение переменной 

- 🔗 [types/ `literal`](../Awesome/types/literal/literal.md)

```typescript
  let msg: 'Hello' = 'Hello';
  const salary: 999 = 999;
  const yes: true = true;
```

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>:never 📌</code></summary>
  
### Функция никогда не возвращает значение. `type :never`

- 🔗[types/ `never`](../Awesome/types/never/type-never.md)

</details>

<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>:never 📌</code></summary>
  
### Types null / undefined (обычное определение)

- 🔗 [types/ `null and undefined`](../Awesome/types/nullxUndefined/info.md)

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>types union 📌</code></summary>
  
### Union объединяет несколько типов в один.

- 🔗 [types/ `union`](../Awesome/types/union/union.md)

```TypeScript

  function showMsgUnion(msg: string | number): void {
    console.log(msg);
  }
  showMsgUnion('Строка');
  showMsgUnion('Число');

```

</details>

<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->















