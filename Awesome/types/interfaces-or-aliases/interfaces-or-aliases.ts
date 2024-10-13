
//  Отлично подходят для использования объектов 
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const getBear = (): Bear => {
  return {
    name: "Baloo",
    honey: true
  };
};

const bear = getBear();
bear.name;
bear.honey;



// Используй для примитвных типов в качестве псевдонима
type Protocol = "https" | "http";
type Port = 3000 | 3001;

type Config = {
  protocol: Protocol,
  port: Port,
}



