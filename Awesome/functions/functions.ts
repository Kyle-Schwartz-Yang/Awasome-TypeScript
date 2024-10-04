
function logBrtMsg(isBirhday: boolean, useName: string, age: number): string {
  if (isBirhday) {
    return `Name ${useName.toLowerCase()} age: ${age + 1}`
  } else {
    return "Error";
  }
}


console.log(logBrtMsg(true, 'Jeck', 22))