
function logBrtMsg2(isBirhday: boolean, useName: string, age: number): string {
  if (isBirhday) {
    return `Name ${useName.toLowerCase()} age: ${age + 1}`
  } else {
    return "Error";
  }
}

console.log(logBrtMsg2(true, 'Jeck', 22))



// (Вывод в консоль, отправка данных на сервер, работа с DOM-деревом) - имеет тип :void 
/* Ничего не возвращает :void */
function logMessage(message: string): void {
  console.log(message);
}