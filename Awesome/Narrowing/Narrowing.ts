//# 1. Сужение типов с помощью оператора typeof
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object" && strs !== null) {
    for (const s of strs) {  // Ошибки нет, так как null исключен
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // здесь strs является null
  }
}

//# 2. Сужение с помощью проверки на истинность
function printLength(str: string | null) {
  if (str) {
    console.log(str.length);  // Здесь str точно не null
  } else {
    console.log("It's null or empty string");
  }
}

//# 3. Сужение с instanceof
class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Fish {
  swim() {
    console.log("Fish is swimming");
  }
}

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim();
  }
}

//# 4. Сужение с помощью in оператора
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };

function printEmployeeInformation(emp: Admin | Employee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

//# 5. Сужение с помощью пользовательского type guard
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function printNumber(x: any) {
  if (isNumber(x)) {
    console.log(x.toFixed(2));  // Здесь x уже имеет тип number
  } else {
    console.log("Not a number");
  }
}