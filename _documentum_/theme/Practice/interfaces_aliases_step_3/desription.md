# Practice step_3

> Чтобы получить ключи и значения объекта вместо `for…in`  можно использовать `Object.entries` но это приводит к синтаксической ошибке из-за отсутствия дополнительных настроек в `tsconfig.json` поскольку `Object.entries` было добавлено в `ECMAScript 2017 (ES8)`. Но настройки по умолчанию рассчитаны на поддержку es2016.
<!-- ------------------------------------------------- -->

### Object.entries

- Необходимые настройки `tsconfig.json`

```json
  {
      "compilerOptions": {
          "target": "es2017", // или более поздняя версия
          "lib": ["es2017", "dom"],
          "strict": true,
          "noImplicitAny": true,
          "strictNullChecks": true
      }
  }
```
### Использование `Object.entries`

> Object.entries() возвращает массив кортежей ([key, value]), где key автоматически считается строкой (string), а value — значением соответствующего свойства объекта. `Object.entries(data): [string, any][]`

```ts

  function printReport(data: TotalWarehouse): string {
    const emptyItems: string[] = [];

    const result = Object.entries(data);
    result.map(([key, value]) => {
      if (value === "empty") {
        emptyItems.push(key)
      }
    })

    if (emptyItems.length > 0) {
      return `We need this items: ${emptyItems.join(", ")}`;
    }

    return "Everything fine";
  }

```

### Использование `for…in` 

- Обрати внимания что ключ необходимо анотировать 

```ts

    function printReport(data: TotalWarehouse): string {
      const emptyItems: string[] = [];

      for (let key in data) {
        if (data[key as keyof TotalWarehouse] === "empty") {
          emptyItems.push(key);
        }
      }

      if (emptyItems.length > 0) {
        return `We need this items: ${emptyItems.join(", ")}`;
      }

      return "Everything fine";
    }

```