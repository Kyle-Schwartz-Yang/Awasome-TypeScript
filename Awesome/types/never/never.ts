
// Функция имеет тип :never
const createError = (msg: string) => {
  throw new Error(msg);
}

// Бесконечная функция (зависнит) :never
const createNever = (msg: string) => {
  while (true) {
    throw new Error(msg);
  }
}


// В случае ошибки вернем :never 
function logBrtMsg(isBirthday: boolean): string {
  if (isBirthday === true) {
    return 'День рождение сегодня';
  } else if (isBirthday === false) {
    return 'День рождение не сегодня';
  } else {
    return createError('error message');
  }
}