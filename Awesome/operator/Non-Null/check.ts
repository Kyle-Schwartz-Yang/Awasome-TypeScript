export { }; // Превращает файл в модуль

interface User {
  name: string;
  surname: string;
}


const nonNullObj = {
  name: 'Jack',
  surname: 'Simpson',
  age: 22,
}



interface User {
  name: string,
  surname: string,
  age?: number,
}


const obj: User = {
  name: 'Jacj',
  surname: 'Simpson',
}

console.log(obj!.age) 