# Редкие типы `symbol && bigint`


## symbol 
*Стандартное поведение, необходимо указать аннотацию типа*

```TypeScript
let id: symbol = Symbol("id");

const data = {  [id]: 1 }
console.log(data[id])
```


## bigint 
*Для нормальной работы с этим типом необходимо изменить tsconfig.json*

```TypeScript
  const num1: bigint = 1n; //error
```