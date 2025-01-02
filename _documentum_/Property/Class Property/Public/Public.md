- Використовується за замовчуванням, навіть якщо модифікатор не вказаний.
- Властивості/методи доступні скрізь: як всередині класу, так і за його межами.

---

```ts
	class Person {
	  public name: string;
	
	  constructor(name: string) {
	    this.name = name;
	  }
	
	  public greet() {
	    console.log(`Hello, ${this.name}!`);
	  }
	}
	
	const person = new Person("Alice");
	console.log(person.name); // Доступ зовні: "Alice"
	person.greet(); // Hello, Alice!
	
```

---
