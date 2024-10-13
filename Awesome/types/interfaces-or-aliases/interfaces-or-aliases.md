
# interfaces or Type Aliases

> If you would like a heuristic, use interface until you need to use features from type

(Type Aliases)[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces]

1. Синтаксис объявления:
    Interfaces используют ключевое слово `interface`
    Type aliases используют ключевое слово `type`
2. Расширение/наследование:
    Interfaces используют ключевое слово extends
    Type aliases используют оператор пересечения `&`
3. Объединение деклараций:
    Interfaces с одинаковым именем автоматически объединяются
    Type aliases не могут быть объединены; каждый должен иметь уникальное имя
4. Примитивные типы:
    Type aliases могут представлять примитивные типы, `union` типы и `кортежи`
    Interfaces предназначены только для объектных типов
5. Вычисляемые свойства:
    Type aliases поддерживают вычисляемые свойства
    Interfaces не поддерживают вычисляемые свойства напрямую
6. Реализация классами:
    Interfaces могут быть реализованы классами с помощью ключевого слова `implements`
    Type aliases не могут быть напрямую реализованы классами
7. Производительность при компиляции:
    Interfaces могут быть более эффективными при компиляции для очень больших проектов
    Type aliases могут вызывать незначительное увеличение времени компиляции в крупных проектах

```typescript

// 2. Расширение/наследование
interface IEmployee extends IUser {
  employeeId: number;
}

type TEmployee = TUser & {
  employeeId: number;
};

// 3. Объединение деклараций
interface IMerge {
  a: number;
}
interface IMerge {
  b: string;
}
// IMerge теперь имеет оба свойства: a и b

// Type aliases нельзя объединить таким образом
type TMerge = { a: number };
// type TMerge = { b: string }; // Ошибка: Повторяющийся идентификатор 'TMerge'

// 4. Примитивные типы
type TPrimitive = string;
type TUnion = "yes" | "no";
type TTuple = [number, string];

// Interfaces не могут представлять примитивные типы напрямую
// interface IPrimitive = string; // Ошибка

// 5. Вычисляемые свойства
type TDynamic = {
  [key: `prefix_${string}`]: string;
};

// Interfaces не поддерживают вычисляемые свойства напрямую
// interface IDynamic {
//   [key: `prefix_${string}`]: string; // Ошибка
// }

// 6. Реализация классами
interface IShape {
  area(): number;
}

class Circle implements IShape {
  constructor(private radius: number) {}
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// Type aliases не могут быть напрямую реализованы
type TShape = {
  area(): number;
};

// class Square implements TShape {} // Ошибка

// 7. Производительность при компиляции
// Этот пункт трудно продемонстрировать кратким примером,
// так как различия проявляются только в очень больших проектах

```


## 📌 Extending an interface 

```typescript 
//  Расширение для interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const getBear = (): Bear => {
  return {
    name: "Baloo",
    honey: true
  };
};

const bear = getBear();
bear.name;
bear.honey;


```

## 📌 Extending a type via intersections 

```typescript 
// Использования пересечение Type Aliases
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const getBear = (): Bear => {
  return {
    name: "Baloo",
    honey: true
  };
};

const bear = getBear();
bear.name;
bear.honey;

```

## 📌 Почему выбирать так трудно ? (легко) 

> If you would like a heuristic, use interface until you need to use features from type

- Если вам нужен примитивный тип в качестве псевдонима – то ту только типы
- Если вы откуда-то берете готовый интерфейс и его нужно расширить – это интерфейсы
- Если же вы просто работаете с объектами, то конкретной разницы не будет

> Но чаще всего для работы с объектами используются интерфейсы! - так исторически сложилось в программировании . Советую использовать именно их. В документации также это рекомендуют.