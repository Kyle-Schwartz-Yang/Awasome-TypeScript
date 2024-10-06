

// Изменить нельзя даже регистр 
let msgLiteral: 'hello' = 'hello';
console.log(msgLiteral.toUpperCase()) // HELLO

//msgLiteral = 'hi'; //ERROR




// -----------------------------------------------------------------------------------------
// Пример использования в комбинации аннотации литерала + сужение Narrowing
const port3000: number = 3000;
const port3001: number = 3001;

function startSetting(protocol: "http" | "https", port: 3000 | 3001): "Server started" | "Invalid port" {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`)
    return "Server started";
  } else {
    console.log('Invalid port');
    return "Invalid port";
  }
}

const resultLiteral = startSetting("https", 3001);
console.log(result); // Выведет: Server started