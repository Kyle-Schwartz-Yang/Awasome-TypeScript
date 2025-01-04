### Модифікатори доступу **`public`**, **`private`**, і **`protected`**

- Використовуються **тільки у класах**.
- Визначають рівень доступу до властивостей та методів.
- Не застосовуються до інтерфейсів, типів чи інших структур даних у TypeScript

```ts
	class Animal {
	  public name: string;
	  private age: number;
	  protected species: string;
	
	  constructor(name: string, age: number, species: string) {
	    this.name = name;
	    this.age = age;
	    this.species = species;
	  }
	}

```