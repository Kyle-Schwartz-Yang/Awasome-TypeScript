// #  -------------Примитивные типы (1)

let userName: string = 'John'; // type string:
let userAge: number = 25; // type number:
let active: boolean = true; // type boolean:


// # ----------Массивы (2)

// Массив строк:
let names: string[] = ["Alice", "Bob", "Charlie"];

// Массив чисел:
let scores: number[] = [85, 90, 78];

// Использование дженериков для массивов:
let values: Array<number> = [1, 2, 3];


// # ----------Объекты (3)

// Аннотация типа объекта
let personA: { name: string; age: number; } = {
  name: "Alice",
  age: 25
};

// # ----------Функции (4)

// Аннотация типов параметров и возвращаемого значения:
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Функция, возвращающая void (ничего не возвращает):
function logMessage(message: string): void {
  console.log(message);
}

// # ----------Кортежи (Tuples) (5)

// Аннотация для кортежей (функция, которая возвращает несколько значений):
let personB: [string, number] = ["Alice", 25];

// # ----------Любой тип (any) (6)

// Используется, когда тип данных заранее неизвестен:
let value: any = "Could be anything";


// #  --------------- Неопределённое или undefined и null (7)

// Аннотация с возможностью быть null или undefined:
let possibleValue: string | null = null;
let maybeUndefined: string | undefined;


// #  --------------- Объединённые типы (Union types) (8)

// Аннотация для переменной, которая может быть одного из нескольких типов:
let id: string | number;
id = "abc123";
id = 123;


// #  --------------- тип unknown (9)

// Безопасный аналог any, когда тип данных неизвестен:
let inputValue: unknown;


// #  --------------- Функции с необязательными параметрами (10)

// Аннотация для необязательного параметра
function showMessage(message: string, user?: string): void {
  console.log(`${message}, ${user ?? "Guest"}`);
}


// #  --------------- Интерфейсы и типы (Interfaces and Type Aliases) (11)

// Интерфейс для объекта:
interface Person {
  name: string;
  age: number;
}

let alice: Person = {
  name: "Alice",
  age: 25
};

// Типы:
type ID = string | number;
let userId: ID = "abc123";


// #  --------------- Перечисления (Enums) (12)

// Аннотация с использованием перечислений:
enum Status {
  Active,
  Inactive,
  Suspended
}

let currentStatus: Status = Status.Active;


// #  --------------- Дженерики (Generics) (13)

// Аннотация с дженериками для универсальных типов
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>("Hello");






