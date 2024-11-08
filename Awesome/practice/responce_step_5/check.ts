// Request

export {}

// Можно и не создавать перечисление, но вдруг в будущем статусов будет больше?

interface iAnimals {

	animal: "cat" | "dog" | "bird";
	breed: string;
	sterilized?: string;

}

interface iSuccess {
  status: 'available',

  data: {
      animal: 'cat' | 'dog' | 'bird',
      breed: string,
      sterilized?: string,
      location: string,
      age?: number
  }

}

interface iError {
  status: 'not available',

  data: {
      message: string,
      nextUpdateIn: Date
  }
}

// function isAvailable(res: Res): res is iSuccess {
// 	if (res.status === 'available') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

/*
- Как называется запись iSuccess['data'] ?
- Такая запись называется доступ к типу по индексу (или Indexed Access Type)
- Этот синтаксис позволяет получать тип конкретного свойства интерфейса или типа, обращаясь к нему по имени через квадратные скобки
*/

type Res = iSuccess | iError;


function checkAnimalData(animal: Res): iSuccess['data'] | string {

	if (animal.status === 'available') {
		return animal.data;
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}

}

