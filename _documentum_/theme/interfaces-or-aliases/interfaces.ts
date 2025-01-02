
/*

- Если вам нужен примитивный тип в качестве псевдонима – то ту только типы
- Если вы откуда-то берете готовый интерфейс и его нужно расширить – это интерфейсы
- Если же вы просто работаете с объектами, то конкретной разницы не будет

> Рекомендация: Если можешь использовать interface используй его.
*/

interface IConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole { }

const serverIConfig: IConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const startIServer = (
  { protocol, port }: IConfig
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server started";
};

