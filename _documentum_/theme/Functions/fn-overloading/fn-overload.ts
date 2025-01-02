
export {}

function print(value: string): void;  // Сигнатура для строки
function print(value: number): void;  // Сигнатура для числа

// Реализация с объединённой логикой
function print(value: string | number): void {
    if (typeof value === "string") {
        console.log(`Строка: ${value}`);
    } else if (typeof value === "number") {
        console.log(`Число: ${value}`);
    } else {
      console.log(`Что-то: ${value}`);
    }
}


print('Строка или Число')


/*----------------------------------------------------------------------------------------------- */

interface Square {
  side: number;
  area: number;
}

interface Rect {
  b: number;
  a: number;
  area: number;
}


/*----------Пример сигнатуры функции-----------------*/
function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;

function calculateArea(a: number, b?: number): Square | Rect {
  if(b) {
    const rect: Rect = {
      a, b, //Сокращение a: a, b: b
      area: a * b,
    }
    return rect
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    }
    return square
  }
}


calculateArea(1, 5)

