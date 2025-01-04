
- Можно указать какая структура массива должна быть
- Можно указать тип 

```TypeScript

// Массив строк
const strArray: string[] = ["apple", "banana", "cherry"];

// Массив чисел
const numArray: number[] = [1, 2, 3, 4, 5];

// Массив объектов
const objArray: { name: string; age: number }[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

// Массив массивов (двумерный массив)
const arrArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```


## Ошибки TypeScript (respect) 📌

- Ошибка! Нельзя “пушить” число в массив, состоящий из строк

```TypeScript
const numArray: number[] = [1, 2, 3, 4, 5];
numArray.push('lastKey');
```


## Аргументы внутри callback-функции 📌

- TS определяет тип аргумента внутри callback-функций, что упращает жизнь;
- **Tip!** Лучше указывать аннотацию аргумента самостоястельно (Good practice);💡
- Указывать аннотации это хорошая практика, иногда конечно ухудщает читаемость:

```TypeScript
const departments: string[] = ['dev', 'design', 'marketing'];

// Фильтруем отделы, исключая "dev"
const filteredDepartments = departments.filter((department: string) => department !== "dev");
// Для каждого оставшегося отдела добавляем текст " = done"
const report = filteredDepartments.map((department: string) => `${department} = done`);

console.log(report); // ["design = done", "marketing = done"]
```