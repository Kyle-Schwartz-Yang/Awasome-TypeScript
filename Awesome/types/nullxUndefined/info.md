# null && undefined 📌

- null - отсутствие чего-либо полностью

*Этот тип данных стоит использовать тогда, когда мы четко хотим сказать, что чего-то не существует: нет таких данных на сервере, нет такогопродукта, нет такого пользователя и тп*
```TypeScript
  console.log(smth); // null
```

- undefined - это значит что-то есть, но значения у него не определено 

```TypeScript
  const something: undefined;
  console.log(something); // undefined
```

## Неопределнные типы в TS 📌
- Первые две операции с каждой стороны будут без ошибок, остальные и подобные всегда будут давать ошибку. 
- Такое поведение можно отключить в tsconfig.json `strictNullChecks: false` **Но! "Никогда так не делай"**
- Это правильное поведение, так должно быть ! 💡
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