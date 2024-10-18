
# Необязательные свойства / Optional-property-modifiers

> В TypeScript можно указывать, что свойства объекта являются необязательными, добавляя знак вопроса (?) после имени свойства. Это позволяет разработчикам не предоставлять значение для этих свойств, когда они создают объект.

- *Если 'необязательные свойства' не будет указано, то получим `undefined`*

### Optional-property-modifiers : Object

```ts

  interface User {
    name: string;
    age?: number; // Необязательное свойство
    isAdmin: bolean | undefined;
  }

  const user1: User = {
    name: "Alice",
    isAdmin: undefined
  };

  const user2: User = {
    name: "Bob",
    age: 25, // Решили использовать
    isAdmin: true
  };

```


### Optional-property-modifiers : Function

- Простой пример: 

```typescript 
  function sendUserData(name: string, age?: number) {
    console.log(`Имя ${name} Скажешь возраст ? ${age}`)
  }
```

- Более реальный пример:

```typescript

  interface Product {
    id: number;
    name: string;
    description?: string; // Необязательное свойство
  }

  function printProduct(product: Product): void {
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);

    if (product.description) {
      console.log(`Description: ${product.description}`);
    }

  }

  const product1: Product = { id: 1, name: "Laptop" };
  const product2: Product = { id: 2, name: "Phone", description: "Latest model" };

  printProduct(product1);
  printProduct(product2);

```