
// runtime - not needed! ( Переменные заданы статически )

interface Person {
  name: string,
  surname: string,
  age: number,
  isAdmin: boolean,
}

const object: Person = {
  name: 'Jack',
  surname: 'Simpon',
  age: 22,
  isAdmin: true,
}

// keyof указывет на то что key является один из ключей interface Person

for (let key in object) {
  console.log(object[key as keyof Person])
}

// Использования Второй синтаксис type assertion

for (let key in object) {
  console.log(object[<keyof Person>key])
}
