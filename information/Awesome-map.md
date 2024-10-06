# Awesome map 🗺️


  <a href="https://www.typescriptlang.org/docs/" target="_blank">
    <img alt="Static Badge" src="https://img.shields.io/badge/Documentation-%232a7aef?style=flat&logo=typescript&logoColor=%23fff&labelColor=%23000000">

  </a>
<hr>


# 🧩 Theme typescript

<details>
<summary><code>Functions 📌</code></summary>
  
### `Functions` : *Аннотация для функции*

- 🔗 [Theme/ Functions](../Awesome/theme/Functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>Array 📌</code></summary>
  
### `Array` : *Аннотация для массивов*

- 🔗 [Theme/ Functions](../Awesome/theme/functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>Object 📌</code></summary>
  
### `Object` : *Аннотация для объектов*

- 🔗 [Theme/ Functions](../Awesome/theme/functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>Tuples 📌</code></summary>
  
### `Tuples` : *Кортежи*

- 🔗 [Theme/ Functions](../Awesome/theme/functions/fn.md)
- 🔗 [off.Докуметация: Аннотация аргументов](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>Narrowing 📌</code></summary>
  
### `Narrowing` : *Механизм сужения типов*  

- 🔗 [Theme/ Narrowing](../Awesome/theme/Narrowing/Narrowing.md)
- 🔗 [off.Докуметация](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</details>


<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->


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
<details>
<summary><code>types :aliases 📌</code></summary>
  
### Aliases - Это удобно сохранять перебор Union.

- 🔗 [types/ `aliases`](../Awesome/types/aliases/aliases.md)
- 🔗 [off.Докуметация: types aliases](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#reusable-types-type-aliases)

```TypeScript
  type Animals = 'cat' | 'dog' | 'monkey';
```
</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->















