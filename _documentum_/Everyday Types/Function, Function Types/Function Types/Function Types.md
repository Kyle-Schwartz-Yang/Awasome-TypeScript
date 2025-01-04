---
tags:
  - function_types
  - function
---

**Function Types** у TypeScript — це спосіб описати типи функцій, щоб чітко визначити:

1. **Що функція отримує як вхідні параметри.**
2. **Що функція повертає.**
3. `(параметри: тип): тип_повернення`

```ts
type Greet = (name: string) => string; // **Сигнатура**
const greet: Greet = (name) => `Hello, ${name}!`;// **Использование**

//--------------------------------------------------
type Logger = (message: string) => void; // **Сигнатура**
const log: Logger = (message) => console.log(message); // **Использование**

type Add = (a: number, b: number) => number; // **Сигнатура**
const add: Add = (a, b) => a + b; // **Использование**
```

### Висновок 

	Function Types — це спосіб сказати:
	
> _"Моя функція отримує такі-то параметри і повертає такий-то результат."_