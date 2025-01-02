# Interfaces

> Интерфейс - это еще один тип в TS, который позволяет синтаксически записать шаблон того , который будет создан.

- Обычно именно для interfeces дают используя "Венгерскую нотацию" но это не обязательно. `IConfig` ...
- Интерфейс / interfeces работают именно с классическими объектами...

```typescript
interface iConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
}
```

> Отличия от type (альсов) минимальное 

```typescript

type Config {

  protocol: "http" | "https";
  port: 3000 | 3001;

}

```

## Объединение интерфейсов

```typescript
interface iPerson {
  name: string;
  age: number;
}

interface iConfig {
  role: string;
}

interface iEmployee extends iPerson, iConfig {
  // Тут могут быть новые свойства или пустые скобки...
  salary: number;
}

const configPerson: iEmployee = {
  name: 'Jack',
  age: 22,
  role: 'admin',
  salary: 999,
}

```


## INDEX SIGNATURES (индексная сигнатура)

> Если не понятно сколько будет свойст, но понятно какой у них всех будет тип, то можно использовать специальный синтаксис:

```typescript
interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  display: "flex",
  witdh: "100px",
  height: "100px",
}

```

## Примеры использования type

- Обрати внимания на локаничность
- Все можно переписать на Interfaces, кроме `type StartFunction` Поскольку это не класический объект
- Можно строго указать `const serverConfig: BasicConfig = {}`

```typescript

const serverConfig = {
    protocol: "https",
    port: 3000,
    role: "admin"
}

const backipConfig = {
    protocol: "http",
    port: 3001,
}

interface BasicConfig {
    protocol: string,
    port: number,
}


const startServer = (config: BasicConfig): string => {
  console.log(`Протокола ${config.protocol} Порт: ${config.port}`);
  return "Server started";
}


startServer(serverConfig);
startServer(backipConfig);



```

<!-- Больше примеров -->

```typescript

// Определение типа для конфигурации сервера
type ServerConfig = {
  protocol: "https" | "http";
  port: 3000 | 3001;
  log: (msg: string) => void;
};

const newServerConfig: ServerConfig = {
  protocol: "https",
  port: 3000,
  log: (msg: string): void => console.log(msg),
};

type StartFunction = (config: ServerConfig) => string;

const createStartServer: StartFunction = (
  config: ServerConfig
): string => {
  config.log(`Server started on ${config.protocol} use port: ${config.port}`);
  return "Server started";
};

createStartServer(newServerConfig);

const person: string = 'Jackson';

```

