# Объектные литералы

> 📌 **Объектные литералы почти не используются в реальной практике, но в теории их знать полезно.** 💡

```typescript
const serverConfig: { protocol: 'https' | 'http', port: 3000 | 3001 } = {
  protocol: 'https',
  port: 3000,
}

function startServer(protocol: "http" | "https", port: 3000 | 3001): 'Server started' {
  return "Server started";
}

console.log(startServer(serverConfig.protocol, serverConfig.port))
```


# Объектные литералы функции

- Функция - это объект в JS. 💡
- Литералы можно применять в качестве аннотаций и в функциях.

```typescript

//  Aннотация переменной функции
const startServer: 💡 (protocol: "https" | "http", port: 3000 | 3001) => string = (
  protocol: "http" | "https", port: 3000 | 3001): 'Server started' {

  return "Server started";
}

console.log(startServer(serverConfig.protocol, serverConfig.port))

```

## Давай разбираться : 📌

### Аннотация переменной функции: 💡

```typescript
  const startServer: (protocol: "http" | "https", port: 3000 | 3001) => string
```
- Здесь `startServer` — это переменная, которая ссылается на функцию, а аннотация определяет:
  - Параметры функции: `protocol: "http" | "https", port: 3000 | 3001` использует Union
  - Возвращаемый тип : `=> string` — указывает, что эта функция возвращает строку.
  - Аннотация `=> string` — означает, что любая функция, присвоенная этой переменной, должна возвращать строку

### Фактическая функция 💡

```typescript
  (protocol: "http" | "https", port: 3000 | 3001): 'Server started' => {
    return "Server started";
  }
```
- Эта часть — сама функция, которая:
  - Принимает два аргумента: protocol и port.
  - Возвращает строку "Server started".

