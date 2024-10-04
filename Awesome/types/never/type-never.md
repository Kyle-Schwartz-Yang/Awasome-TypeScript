# `TYPE : NEVER`
- [Type :never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) - official website

- Нужно понять разницу между `:never` и `:void`
- Выбрасывание ошибок обычно возвращает `:never`
- Бескнечные функции возвращают `type :never`

```TypeScript
// Возвращает :never
const createError = (msg: string) => {
  throw new Error(msg);
}

// Бесконечная функция (зависнит) :never
const createNever = (msg: string) => {
  while (true) {
    throw new Error(msg);
  }
}
```
# Зачем это нужно:
- Это помогает обработать непредвиденные ситуации в коде. Если в будущем тип переменной isBirthday изменится или придут некорректные данные, TypeScript не допустит неправильного поведения.
- Функции с типом never используются для указания, что выполнение программы не должно достигать определённого участка кода, либо потому что всегда выбрасывается исключение, либо потому что выполнение зацикливается

```TypeScript

function logBrtMsg(isBirthday: boolean): string {
  if (isBirthday === true) {
    return 'День рождение сегодня';
  } else if (isBirthday === false) {
    return 'День рождение не сегодня';
  } else {
    return createError('error message');
  }
}

```