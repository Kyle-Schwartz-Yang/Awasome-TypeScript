

// interface: iPerson
interface iPerson {
  name: string,
  age: number,
}

// interface: iConfig
interface iConfig {
  isAdmin?: boolean,
}

// Объединение iConfig + iPerson
interface iEmployee extends iConfig, iPerson {
  salary?: number,
}

// Использование interface: iEmployee
const objectPerson: iEmployee = {
  name: 'Jack',
  age: 23,
  isAdmin: true,

}

console.log(objectPerson.age);


// -------------------------------------------------------------------------------------------------------------

// Специальный type Function - означает что неизвестно какая функция прийдет (желательно конечно указывать)

type ServerConfig = {
  protocol: "https" | "http";
  port: 3000 | 3001;
  log: (msg: string) => void;
};

const newServerConfig: ServerConfig = {
  protocol: "https",
  port: 3000,
  log: (msg: string): void => console.log(msg),
};

type StartFunction = (

  protocol: "https" | "http",
  port: 3000 | 3001,
  // log: Function
  log: (msg: string) => void

) => string;

const createStartServer: StartFunction = (

  protocol: "https" | "http",
  port: 3000 | 3001,
  // log: Function
  log: (msg: string) => void

): string => {
  log(`Server started on ${protocol} use port: ${port}`);
  return "Server started";
};

createStartServer(newServerConfig.protocol, newServerConfig.port, newServerConfig.log);


//-------------------------------------------------------------------------------------------------



