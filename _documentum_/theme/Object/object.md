# Объекты в TypeScript

**Объект в JS – это базовая единица, но в TS как типы чаще используютсядругие сущности: Type, Interface...** Но объекты мы можем типизироватьна этапе использования

<!-- ! -->
# Деструктуризация объекта 

- Такая структура используется довольно редко, но знать о ней нужно
- Обычно используется более продвинутая структура (изучим позже)

```TypeScript

  function objectspreet({
    // Перечень свойст для деструктуризации
    isBirthDayData,
    userNameData,
    ageData,
    messages: { error }, //Вложеный объект
  }: {
    // Типизация свойст объекта 
    isBirthDayData: string;
    userNameData: string;
    ageData: number;
    messages: { error: string }
  }): string {

    if (isBirthDayData === "yes") {
      return `Happy birthday, ${userNameData}! You are now ${ageData + 1} years old!`;
    } else if (isBirthDayData === "no") {
      return `Hello, ${userNameData}. You are ${ageData} years old.`;
    } else {
      return `${error}`
    }
  }

  // Вызов функции:
  const message = objectspreet({
    isBirthDayData: "yes",
    userNameData: "John",
    ageData: 30,
    messages: { error: 'error' },
  });

  console.log(message);

```

