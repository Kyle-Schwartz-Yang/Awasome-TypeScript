
// types Union
const messageUnion: string | number = 5;
const messageUnionArray: string[] | number[] = [1, 2];

// Возможно поместить разные типы, но не желательно
const messageUnionArrayСopy: (string | number)[] = [1, '2'];

// Чаше всего используется для аннотации аргументов у функции
function showMsgUnion(msg: string | number): void {
  console.log(msg);
}
showMsgUnion('Строка');
showMsgUnion('Число');