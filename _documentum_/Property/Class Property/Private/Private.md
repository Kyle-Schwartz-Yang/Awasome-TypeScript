- Доступні тільки **всередині класу**, де вони оголошені.
- Не доступні навіть у класах-нащадках
---
```ts
	class Person {
	  private age: number;
	
	  constructor(age: number) {
	    this.age = age;
	  }
	
	  private showAge() {
	    console.log(`Age is ${this.age}`);
	  }
	}
	
	const person = new Person(30);
	// console.log(person.age); // Помилка: 'age' має модифікатор 'private'
	// person.showAge(); // Помилка: 'showAge' має модифікатор 'private'

```