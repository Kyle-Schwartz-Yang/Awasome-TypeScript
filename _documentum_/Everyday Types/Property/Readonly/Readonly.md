#  readonly (Property Modifiers)

> Используя `readonly` Свойства объекта, массива или кортежа можно сделать неизменными. Любая операция направленная на это, будет воспринята как ошибка. 

- Есть два возможноы синтаксиса :

### Использование оператора `readonly`

```typescript

  /* Object: Объект */
  interface User {
    readonly name: string,
    readonly surname: string,
  }

  /* Array: Массив */
  const arr: readonly number[] = [1, 2, 3];

  /* Tuples: Кортеж */
  const arrTuples: readonly [...number[]] = [1, 2, 3];


  /* Class: Класс */
  class Person {
    readonly name: string = "name";
  }

```

### При помощи Джеериков

> Такой синтаксис встречается реже, так как оператор `readonly` удобнеее.

```typescript 

  const userFre: Readonly<User> = {
    name: 'jack',
    surname: 'simpson'
  }

  /* Array: Массив */
  const arr:  ReadonlyArray<number> = [1, 2, 3];

```