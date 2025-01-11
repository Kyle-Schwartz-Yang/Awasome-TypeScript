---
tags:
  - void
  - type_void
---
<a><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"> </a>
## Void відсутність конкретного типу
---
> Тип даних `void` можна назвати повною протилежністю типу `any`, оскільки цей тип означає відсутність конкретного типу. 
> Основне призначення типу `void` — явно вказувати, що функція або метод не повертає значення.  

- Тип `void` не є підтипом типу `any`, але часто використовується для позначення функцій без значення, що повертається.
```ts
function action(): void {}
function logMessage(message: string): void { console.log(message) }
```

- Функції типу `void` не можуть повернути значення:
```ts
	// Помилка: функція з типом void не може повертати значення 
function showNumber(): void {   let result: any = 5; return result; }
```


Якщо не вказано тип функції, TypeScript може вивести тип `void`:
```ts
function action() {   
	// function action(): void 
}
```

### Коли використовувати ?
- Якщо функція нічого не повертає 
- Коли асинхронна функція завершується, але не повертає значення. (`function fetchData(): Promise<void>`)
-  У interface для самодокументування коду `interface ILogger { log(message: string): void; }`

### Цікава інформація 

> _У JavaScript є оператор void вже дуже давно, зараз Його майже не використовують, використовувався часто для функціях з само викликом, він відрізняється від Typescript Void._

- У **TypeScript** `void` — це тип для позначення, що функція або змінна **не повертає значення**.
- У **JavaScript** `void` — це оператор, який завжди повертає `undefined`.

