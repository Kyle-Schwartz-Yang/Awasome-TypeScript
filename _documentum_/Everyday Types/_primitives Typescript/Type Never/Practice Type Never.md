### 1. В обробці помилок

```ts
// Вичерпуюча перевірка (exhaustive check)
function logBrtMsg(isBirthday: boolean): string {
  if (isBirthday === true) {
    return 'День народження сьогодні';
  } else if (isBirthday === false) {
    return 'День народження не сьогодні';
  } else {
    return createError('Некоректне значення!'); // Функция повертаюча помилку написана и повертає never
  }
}
```

#### Навіщо це потрібно:

- Обробка непередбачуваних ситуацій.
    
- Гарантія, що всі можливі варіанти змінної опрацьовані.
    
- Якщо тип змінної зміниться, TypeScript вкаже на необхідність внесення змін.
    

---

### 2. Для вичерпуючої перевірки (exhaustive check)

#### Опис

Вичерпуюча перевірка гарантує, що всі можливі значення змінної враховані. Якщо з’являється нове значення, TypeScript вказує на необхідність його обробки.

#### Приклад

```ts
type Animal = "dog" | "cat";

function getAnimalSound(animal: Animal): string {
  switch (animal) {
    case "dog":
      return "Woof!";
    case "cat":
      return "Meow!";
    default:
      // Цей блок не повинен бути досягнутий
      const _: never = animal; // Змінна animal має бути типу never
      return _; // або можна викликати throwError
  }
}
```

#### Навіщо це корисно:

1. **Безпека коду**: Гарантує обробку всіх можливих випадків.
    
2. **Ясність**: Інші розробники розумітимуть, що певний сценарій не повинен виникати.
    
3. **Зручність налагодження**: Код стає передбачуванішим і надійнішим.
    

---

## Переваги використання Type Never

### 1. Безпека типів

- TypeScript видасть помилку, якщо якийсь варіант не врахований у коді.
    

### 2. Чітка документація

- Код стає зрозумілішим: `never` явно вказує, що певний стан неможливий.
    

### 3. Обробка помилок

- Функції з `never` чітко показують, що вони завершуються виключно з помилкою.


## Загальний приклад використання never

```ts
function throwError(message: string): never {
  throw new Error(message);
}

// Використання в коді
function processAnimal(animal: "dog" | "cat"): string {
  switch (animal) {
    case "dog":
      return "Bark!";
    case "cat":
      return "Purr!";
    default:
      throwError("Unknown animal");
  }
}
```