# Функция

- Каждый Аргумент должен иметь анатацию типа (это правильно) 👌🏻
- Аргуметам назначить тип any (плохо) ⛔
- Изменить конфигурацию TS поставить noImplicitAny в позицию false (плохо) ⛔

<!-- ----------------------------------- -->

```TypeScript

/*Первый вариант*/
function logBrtMsg(isBirhday: boolean, useName: string, age: number) {
  if (isBirhday) {
    return `Name ${useName.toLowerCase()} age: ${age + 1}`
  } else {
    return "Error";
  }
}

/*Второй вариант*/
const logBrtMsgTwo = (
  isBirhday: boolean, 
  useName: string, 
  age: number
) => {...}

```
<!-- ----------------------------------- -->

# Типизация возвращаемого значения: 

- Указывать тип возвращаемого значения нужно после аргументов
- TS сможет подсказать ошибку до runtime 
- Если функция ничего не возвращает нужно указать тип :void 
- (Вывод в консоль, отправка данных на сервер, работа с DOM-деревом) - имеет тип :void 

```TypeScript

/* Первый вариант */
function logBrtMsg(isBirhday: boolean, useName: string, age: number): string {
  if (isBirhday) {
    return `Name ${useName.toLowerCase()} age: ${age + 1}`
  } else {
    return "Error";
  }
}

/* Ничего не возвращает :void */
function logMessage(message: string): void {
  console.log(message);
}

```

# Инофрмация 

**Нужно ли ставить аннотацию типа возвращаемого значения, если TS и сам это может сделать?**
@@@ Да, это позволит намного быстрее понимать логику любой функции и отлавливать ошибки, когда у вас несколько возвращаемых значений @@@