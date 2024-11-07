

interface Person {
  name: string;
  age: number;
  address: {
      city: string;
      street: string;
  };
};


type PersonNameType = Person['name'];  // string
type PersonAgeType = Person['age'];    // number
type PersonCityType = Person['address']['city']; // string


function searchPerson(name: Person): Person['address'] | string{
  if (name.name === 'Jackson') {
    return name.address
  }else {
    return 'None address'
  }
}

