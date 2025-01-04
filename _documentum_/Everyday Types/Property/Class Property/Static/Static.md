
- Свойства, которые принадлежат классу, а не его экземплярам.

```ts

	class Counter {
	  static count: number = 0;
	
	  static increment() {
	    this.count++;
	  }
	}
	
	Counter.increment();
	console.log(Counter.count); // 1

```