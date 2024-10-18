
interface User {
  name: string;
  age?: number; // Необязательное свойство
}

const user1: User = {
  name: "Alice"
};

const user2: User = {
  name: "Bob",
  age: 25 // Решили использовать
};


function sendUserData(name: string, age?: number) {
  console.log(`Имя ${name} Возраст ${age}`)
}

sendUserData('jack') // Имя jack Возраст undefined