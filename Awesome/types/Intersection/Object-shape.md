

# Продвинутый Type и пересечение типов ( Intersection -- используя оператор (&) )

> Можно воспользоваться алясом для создание аннотации объекта или создать альас для функции


### Использование aliases для объекта 

(object-literal)['../../theme/Object/object-literal.md']
(aliases)['../aliases/aliases.md']

```typescript
/* Создание aliases */
  type Person = {
    name: string;
    age: number;
    isEmployed: boolean;
  }

/* Теперь можно использовать aliases где угодно. */
  const person: Person = {
    name: 'John',
    age: 30,
    isEmployed: true
  };
```

### Использование aliases для функции 

(object-literal)['../../theme/Object/object-literal.md']
(aliases)['../aliases/aliases.md']

```typescript
  type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer: StartFunction = (protocol: "http" | "https", port: 3000 | 3001): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
}

```

