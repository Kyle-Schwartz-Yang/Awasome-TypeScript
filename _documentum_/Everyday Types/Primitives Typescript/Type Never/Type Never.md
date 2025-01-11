---
tags:
  - never
  - type_never
---

### Основна інформація

- **Type Never** - вказує на те, що функція або блок коду ніколи не повертає значення.
- [Type :never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never) - official website 📌
- [[Practice Type Never]] - Використання на практиці

---
### Різниця між [[Type Never]] та [[Type Void]]

- **Void**: Функція нічого не повертає, але виконує якісь дії (наприклад, `console.log`).
- **Never**: Функція не завершується належним чином або завершується з помилкою.
---

## Використання Type Never

- **Функції, що викликають помилку**
```TypeScript
// Возвращает :never
const createError = (msg: string) => {
  throw new Error(msg);
}
```

- **Нескінченні функції**
```Typescript
// Бесконечная функция (зависнит) :never
const createNever = (msg: string) => {
  while (true) {
    throw new Error(msg);
  }
}
```

---
