# Об'єкти в TypeScript

> **Об'єкт у JavaScript є базовою одиницею, але в TypeScript частіше використовуються інші сутності: типи (`type`), інтерфейси (`interface`).**  
> Проте, об'єкти можна типізувати безпосередньо під час використання.

---
## Деструктуризація об'єкта

---

- Такий підхід застосовується нечасто, але його потрібно знати.
- Зазвичай використовуються більш прості структури, але цей приклад демонструє складніший варіант.
### Приклад функції з деструктуризацією:

```ts
function processObject({ 
// Перелік властивостей для деструктуризації 
	isBirthDayData, 
	userNameData, 
	ageData, 
	messages: { error }, // Вкладений об'єкт 
}: { 
// Типізація властивостей об'єкта 
	isBirthDayData: string; 
	userNameData: string; 
	ageData: number; 
	messages: { error: string }; 
}): string {

if (isBirthDayData === "yes") {
	return `Happy birthday, ${userNameData}! You are now ${ageData + 1} years old!`; 
	} else if (isBirthDayData === "no") { return `Hello, ${userNameData}. You are ${ageData} years old.`; 
	} else { return error; } 
} 
// Виклик функції: 
	const message = processObject({
		isBirthDayData: "yes", 
		userNameData: "John",
		ageData: 30, 
		messages: { error: "An error occurred." }, 
	}); 
console.log(message);
```
