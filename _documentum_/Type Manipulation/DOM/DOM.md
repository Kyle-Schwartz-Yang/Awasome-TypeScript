
# Работа с ДОМ деревом.

> Стоит отметить что с помощью `typescript` врядли будет частое взаимодействие через дом-дерево. Поскольку в основном работа `typescript` реализуется через такие библиотеки как `Angular` или `React`, однако о использование данной возможности знать нужно.

_TypeScript предоставляет богатую типизацию для работы с DOM (Document Object Model) через встроенные интерфейсы_

- Domument, HTMLElement, HTMLInputElement, Event ( MouseEvent, FocusEvent, KeyboardEvent) , CSSStyleDeclaration

## Основные interface


---

### `Node`

	⚪ Любой узел на странице: текстовый, содержимое изображения, любые элементы... Содержит только самые базовые свойства и методы


---

### `Element`

	⚪ Любые элементы на странице, в том числе и невидимые настранице. Содержит базовые свойства и методы, присущие всем элементам. Получаем его без утверждения типа

--- 

### `HTMLElement`

	⚪ Любые html-элементы на странице. Содержит болееспецифичные свойства и методы, присущие элементам.
	

---
### Другие html-элементы на странице :

- `HTMLButtonElement` - Для `<button>`
-  `HTMLAnchorElement` - Для` <a> `
-  `HTMLSelectElement ` - Для `<section>`

	⚪ Определенные html-элементы на странице. Содержат специфичные для них свойства и методы в дополнение к общим

---
>  Щоб  не зловити `null`, бажано не покладатися на Автоматическое определение также использовать различные проверки `try/catch`, `if`

```js
// Интерфейсов огромное количество....
	const box = document.querySelector(".box") as HTMLElement;
	const button = document.querySelector("button") as HTMLButtonElement;
	const link = document.querySelector("a") as HTMLAnchorElement;
	const select = document.querySelector("select") as HTMLSelectElement;
	const input = document.querySelector("a"); // Автоматическое определение
```

