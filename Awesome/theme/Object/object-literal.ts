//# Объектные литералы почти не используются в реальной практике, но в теории их знать полезно

//! ---- Литерал объекта 
const serverConfig: { protocol: 'https' | 'http', port: 3000 | 3001 } = {
  protocol: 'https',
  port: 3000,
}

function startServer(protocol: "http" | "https", port: 3000 | 3001): 'Server started' {
  return "Server started";
}

console.log(startServer(serverConfig.protocol, serverConfig.port))


//++++ Аннотация переменной функции: Объектные литералы функции 
// Подробное описание objLiteral.md
const startServerExpression: (protocol: "http" | "https", port: 3000 | 3001) => string = (
  protocol: "http" | "https", port: 3000 | 3001): 'Server started' => {
  return "Server started";
}

console.log(startServerExpression("http", 3000));

const startServerDeclaration: (protocol: "http" | "https", port: 3000 | 3001) => string =
  function (protocol: "http" | "https", port: 3000 | 3001) {
    return "Server started";
  }

console.log(startServerDeclaration("http", 3000));

//# Объектные литералы почти не используются в реальной практике, но в теории их знать полезно