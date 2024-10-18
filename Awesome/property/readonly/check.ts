export { }; // Превращает файл в модуль

interface User {
  readonly name: string,
  readonly surname: string,
}
const obj: User = {
  name: 'jack',
  surname: 'simpson'
}

obj.name = 'Marry';

console.log(obj.name);


const arr: readonly number[] = [1, 2, 3];


arr[0] = 2;


const arrTuples: readonly [...number[]] = [1, 2, 3];

arrTuples[0] = 1;




class Person {

  readonly name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  changeNane(userName: string) {
    this.name = userName
  }

}
