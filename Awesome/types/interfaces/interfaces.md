# Interfaces

> Интерфейс - это еще один тип в TS, который позволяет синтаксически записать шаблон того , который будет создан.

- Обычно именно для interfece дают используя "Венгерскую нотацию" но это не обязательно. `IConfig` 

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