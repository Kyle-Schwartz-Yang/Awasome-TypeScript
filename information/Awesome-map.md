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

- 🔗 [Theme/ Array](../Awesome/theme/Array/array.md)


</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>Object 📌</code></summary>
  
### `Object` : *Аннотация для объектов*

> Редко используется 💡

- 🔗 [Theme/ Object](../Awesome/theme/Object/object.md)
- 🔗 [Theme/ Object Literal](../Awesome/theme/Object/object-literal.md)


</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>Tuples 📌</code></summary>
  
### `Tuples` : *Кортежи*

- 🔗 [Theme/ Functions](../Awesome/theme/Tuples/Tuples.md)

```TypeScript

  // Tuples of three elements
  const tuples: [string, number, boolean] = ["Jane", 25, true];

```

</details>
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<details>
<summary><code>Narrowing 📌</code></summary>
  
### `Narrowing` : *Механизм сужения типов*  

- 🔗 [Theme/ Narrowing](../Awesome/theme/Narrowing/Narrowing.md)
- 🔗 [off.Докуметация](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)


```TypeScript

//# 2. Сужение с помощью проверки на истинность
function printLength(str: string | null) {
  if (str) {
    console.log(str.length);  // Здесь str точно не null
  } else {
    console.log("It's null or empty string");
  }
}

```

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















