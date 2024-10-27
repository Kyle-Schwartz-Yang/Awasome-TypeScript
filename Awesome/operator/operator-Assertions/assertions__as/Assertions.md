# Type Assertion

> Type assertion в TypeScript — это способ явно указать тип переменной или выражения, чтобы дать компилятору знать, что мы уверены в типе данных, даже если TypeScript не может определить это сам

- В TypeScript есть два синтаксиса для приведения типов (type assertion):

### Синтаксис через as:

```ts
// as
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
```

### Синтаксис через угловые скобки:

```ts
// <>
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (<string>someValue).length;
```

### Утвердить как Объект литерального типа

```ts
const obj = {
  name: "Alice",
  age: 25,
} as const;
```
