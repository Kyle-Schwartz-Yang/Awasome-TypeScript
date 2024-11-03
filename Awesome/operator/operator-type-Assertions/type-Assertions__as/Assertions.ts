export {}



interface Person {
  name: string,
  surname: string,
  age: number,
  isAdmin: boolean,
}

const asserionObj: Person = {
  name: 'Jack',
  surname: 'Simpon',
  age: 22,
  isAdmin: true,
}

// keyof указывет на то что key является один из ключей interface Person

for (let key in asserionObj) {
  console.log(asserionObj[key as keyof Person])
}

// Использования Второй синтаксис type assertion

for (let key in asserionObj) {
  console.log(asserionObj[<keyof Person>key])
}


let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(strLength)