
# interfaces or Type Aliases

> If you would like a heuristic, use interface until you need to use features from type

(Type Aliases)[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces]

- `interfaces` позволяет дублировать имя.
- Обрати внимания на синтаксис 
- Расширять так интерф является плохой практикой искоючением является когда импортируешь 
  стороний интерфейс и не имеешь к нему доступа на прямую
- interfaces может хранить в себе только объекты 

```typescript

// не могу хранить в себе литералы 
interface iConfig "http" | "http";


//Есть возможность записать доп. свойства (странное поведение и плохая практика)

  interface iConfig {
    name: string
  }

  interface iConfig {
    age: number
  }

  const obj: iConfig = {
    name: 'str',
    age: 22,
  }

```

- `Type Aliases` выводит ошибку имея одинаковые имена.
- Обрати внимания на синтаксис 

```typescript

  type Protocol = "http" | "https";

  type tConfig = {
    name: string
  }

  type tConfig = {
    age: number
  }

  const obj: tConfig = {
    name: 'str',
    age: 22,
  }

```



## Extending an interface / Расширение для interface

```typescript 

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

## Extending a type via intersections / Использования пересечение Type Aliases

```typescript 

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


## Что же выбрать ? 

> If you would like a heuristic, use interface until you need to use features from type

- Если вам нужен примитивный тип в качестве псевдонима – то ту только типы
- Если вы откуда-то берете готовый интерфейс и его нужно расширить – это интерфейсы
- Если же вы просто работаете с объектами, то конкретной разницы не будет

> Но чаще всего для работы с объектами используются интерфейсы! - так исторически сложилось в программировании . Советую использовать именно их. В документации также это рекомендуют.