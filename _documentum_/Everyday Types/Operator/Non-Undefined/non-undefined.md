
# Оператор non-undefined assertion

> В TypeScript нет отдельного оператора `non-undefined`, но `!` также работает и с `undefined`. По сути это оператор `non-null`

```ts
    function getValue(obj: { value?: string }): string {
      // Используем non-null assertion (!), чтобы сказать TypeScript, что value не будет undefined
      return obj.value!;
    }

    const obj = { value: "Hello" };
    console.log(getValue(obj)); // "Hello"
```


> Здесь оператор `!` говорит, что значение `obj.value` никогда не будет `undefined`, даже если TypeScript не уверен в этом. Ну если уж мы ошиблись тогда мы получим ошибку уже во время runtime.