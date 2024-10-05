
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
function logMessage52(message: string): void {
  console.log(message);
}



// Использование Union, Очень частое использование 
function showMsgUnion52(msg: string | number): void {
  console.log(msg);
}
showMsgUnion52('Строка');
showMsgUnion52('Число');


