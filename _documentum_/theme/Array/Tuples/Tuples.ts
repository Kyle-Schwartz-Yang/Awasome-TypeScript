
const tuple2: [string, number, boolean] = ["Jane", 25, true];

const [tuplesName, tuplesAge, tuplesIsAdmin] = tuple2;
console.log(tuplesIsAdmin);





// Расширение кортежей (можно использовать один раз)
const userDataTuple: [...boolean[], string, number] = [true, false, 'jam', 22]
const userDataTuple2: [boolean, ...string[], number] = [true, 'jam', 'sugar', 'salt', 22]
const userDataTuple3: [boolean, string, ...number[]] = [true, 'jam', 22, 33, 455,]


