 
	Union тип - это механизм, который позволяет объединить несколько типов,чтобы дословно сказать: эта сущность может быть или этим типом, или этим. 
	Для этого используется специальный оператор

- Активно використовується у [[Type Aliases]] 💡
- Активно може використовувати [Literal Types]
-  Активно використовує [[_documentum_/Narrowing/Narrowing/Narrowing]]

```TypeScript
const message: string | number = 5;
const messageArray: string[] | number[] = [1, 2];
```

- Но нельзя помещать сразу два указаных типа (для этого есть другой синтаксис)
- `(string | number)[]` - Так можно указать что мы хотим видить два типа в одном массиве
- Но Желательно чтобы массив был однородным 💡 (так меньше ошибок)

```TypeScript
const messageArray: string[] | number[] = [1, '2']; // Ошибка 🐞
const messageUnionArrayСopy: (string | number)[] = [1, '2']; // Разные типы 💡
const messageUnionArray2: string[] = ['1', '2']; // GOOD
```

- Чаше всего используется для аннотации аргументов у функции
- Но осторожно будь с манипуляциями этих типов.

```TypeScript

function showMsgUnion(msg: string | number): void {
  console.log(msg);
}
showMsgUnion('Строка');
showMsgUnion('Число');


// Метода .toLowwerCase() нет у числа 
function showMsgUnion(msg: string | number): void {
  console.log(msg.toLowwerCase());
}
showMsgUnion('Строка');
showMsgUnion('Число'); // Ошибка

```

