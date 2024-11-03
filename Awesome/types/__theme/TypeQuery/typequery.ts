export {}




//# Пример с Переменной  :Тип должен быть строго такой же как userName

let userName = "John"; // переменная типа string
type UserNameType = typeof  userName; // новый тип UserNameType со значением string

// теперь можно использовать UserNameType как тип для других переменных
let anotherUserName: UserNameType = "Alice"; // строка, как и userName



//# Пример с Объектом : тип должен быть строго как user

const user = {
  name: 'John',
  surname: 'Simpson',
}

type UserType = typeof user;

const anotherUser: UserType = {
  name: 'John',
  surname: 'Tommas'
}


//# Пример с функцией : Аргумент будет только string и возвращать функция будет string

function greet(name: string): string {
  return `Hello, ${name}`;
}

type GreetFunctionType = typeof greet;

const anotherGreet: GreetFunctionType = (name) => `Hi, ${name}`;

