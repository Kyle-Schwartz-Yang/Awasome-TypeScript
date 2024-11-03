/*

- Если вам нужен примитивный тип в качестве псевдонима – то ту только типы
- Если вы откуда-то берете готовый интерфейс и его нужно расширить – это интерфейсы
- Если же вы просто работаете с объектами, то конкретной разницы не будет

> Рекомендация: Если можешь использовать interface используй его.
*/

type TConfig = {
  protocol: "http" | "https";
  port: 3000 | 3001;
};

type TRole = {
  role: string;
};

type TConfigWithRole = TConfig & TRole;

const serverTConfig: TConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const startTServer = (
  { protocol, port }: TConfig
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);
  return "Server started";
};