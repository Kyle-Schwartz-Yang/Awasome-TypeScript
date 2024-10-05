// --------------------------------------------------------
// !Анотация объета 
// --------------------------------------------------------
//# Аннотация типа объекта
let personObj: { name: string; age: number; } = {
  name: "Alice",
  age: 25
};

//# Анотация вложенного объекта  ( без инициализации )
let objj: {
  name: string; age: number;
  location: {
    city: string;
  };
}


//# Указать необязательное свойство можно так:
let user: {
  name: string;
  age: number;
  isAdmin?: boolean; // необязательное свойство
};

user = {
  name: "Alice",
  age: 25,
};

// --------------------------------------------------------
//! Объект внутри функции :
// --------------------------------------------------------

//# Аннотация объекта внутри функции 

function printUserInfo(user: { name: string; age: number; isAdmin?: boolean }): void {
  console.log(`Name ${user.name} age ${user.age} статус isAdmin ${user.isAdmin || false}`)
}

printUserInfo({ name: 'John', age: 22 })


// Вложенные объекты
function printOrderDetails(order: { id: number; user: { name: string; email: string } }): void {
  console.log(`Order ID: ${order.id}, User: ${order.user.name}, Email: ${order.user.email}`);
}

printOrderDetails({ id: 101, user: { name: "Bob", email: "bob@example.com" } });

// --------------------------------------------------------
//! Дуструктуризация объета
// --------------------------------------------------------

//# Деструктуризация объекта 
let obj52: { nameshk: string; surnamehk: string; agehk: number } = { nameshk: 'Johns', surnamehk: 'Simposon', agehk: 33 };

let { nameshk, surnamehk, agehk } = obj52;


//# Деструктуризация внутри функции 
/*
- Такая структура используется довольно редко, но знать о ней нужно
- Обычно используется более продвинутая структура (изучим позже)
*/
function objectspreet({
  isBirthDayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthDayData: string;
  userNameData: string;
  ageData: number;
  messages: { error: string }
}): string {
  // Проверяем, является ли сегодня день рождения
  if (isBirthDayData === "yes") {
    return `Happy birthday, ${userNameData}! You are now ${ageData + 1} years old!`;
  } else if (isBirthDayData === "no") {
    return `Hello, ${userNameData}. You are ${ageData} years old.`;
  } else {
    return `${error}`
  }
}

// Вызов функции:
const message = objectspreet({
  isBirthDayData: "yes",
  userNameData: "John",
  ageData: 30,
  messages: { error: 'error' },

});

console.log(message);



