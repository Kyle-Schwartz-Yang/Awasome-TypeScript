

const arr: string[] = ['one', 'two', 'thwree'];
const numArr: number[] = [1, 2, 3];

const objArr: { name: string, age: number }[] = [
  { name: 'Jackson', age: 22 },
  { name: 'Jack', age: 33 },
];

const arrArray: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];


const arr52: [string, ...number[]] = ['Первый', 2, 3, 4];



// Что-то из предложеного типа
let mixedArray: (string | number | boolean)[] = [42, "hello", true];

// tuple (кортеж)
let tupleArray: [string, number, boolean] = ["hello", 42, true];
