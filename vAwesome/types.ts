export {}
// -------------------------------------------------------------------------------------------------------------------
/* 
:Примитивные типы: анотация 
*/
// -------------------------------------------------------------------------------------------------------------------
const str: string = 'Hello';

let age: number = 25;
let isAdmin: boolean = true;
let emptyValue: null = null;
let notAssigned: undefined = undefined;
let uniqueId: symbol = Symbol("id");

/* 
#Для использования type bigint нужны настройки tsconfig.json 
let largeNumber: bigint = 123456789123456789n;
*/


/* 
#Пример использования всех примитивных типов в функции 
*/
function processPrimitives(
  name: string,
  age: number,
  isAdmin: boolean,
  uniqueId: symbol,
  salary: bigint,
  emptyValue: null,
  notAssigned: undefined
): void {
  console.log(name, age, isAdmin, uniqueId, salary, emptyValue, notAssigned);
}

// -------------------------------------------------------------------------------------------------------------------

/*
:Typing Array
*/

// -------------------------------------------------------------------------------------------------------------------

const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ['First', 'Second', 'Third'];

//# Generic type, используется редко
const numArray: Array<number> = [1, 2, 3];

//# Tuples / кортеж
const tupleArray: [string, number, string] = ['First', 2, 'Third'];

// кортеж с остаточными типами [ ...number[] ] - любое количество чисел
const tArray: [string, ...number[], string] = ['First', 2, 3, 4, 'Third'];


// -------------------------------------------------------------------------------------------------------------------

/*
:Typing Any
- Очень не рекомендуется использовать, желательно избегать данный тип
*/

// -------------------------------------------------------------------------------------------------------------------

let variabl: any = 1337;
variabl = 'Тип any можно изменять'


// -------------------------------------------------------------------------------------------------------------------

/*
:Typing function

- type void - Означает что функция ничего не возвращает.
- type never - Используесят если функция безконечная или функция возвращает ошибку

*/

// -------------------------------------------------------------------------------------------------------------------

// # type void 
function sayMyName(name: string):void {
  console.log(name);
}
sayMyName('Хайзенберг')

// # type never - Error
function throwError(message: string):never {
  throw new Error(message)
}

// # type never - infinite
function fnInfinite(message: string):never {
  while (true) {
    // функция будет бесконечно выполняться, не возвращая значение
    console.log(message);
  }
}








