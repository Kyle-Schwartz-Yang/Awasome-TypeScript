
- Доступні **всередині класу** і **в класах-нащадках**, але не доступні за межами цих класів

```ts

	class Animal {
	  protected species: string;
	
	  constructor(species: string) {
	    this.species = species;
	  }
	}
	
	class Dog extends Animal {
	  bark() {
	    console.log(`Woof! I am a ${this.species}`);
	  }
	}
	
	const dog = new Dog("canine");
	// console.log(dog.species); // Помилка: 'species' має модифікатор 'protected'
	dog.bark(); // Woof! I am a canine

```