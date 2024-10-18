type ValidAmount = "empty" | number;

interface ClothesWarehouse {
  jackets: ValidAmount;
  hats: ValidAmount;
  socks: ValidAmount;
  pants: ValidAmount;
}

interface StationeryWarehouse {
  scissors: ValidAmount;
  paper: "empty" | boolean;
}

interface AppliancesWarehouse {
  dishwashers: ValidAmount;
  cookers: ValidAmount;
  mixers: ValidAmount;
}

interface TotalWarehouse
  extends ClothesWarehouse,
  StationeryWarehouse,
  AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: true,
  date: new Date(),
};


/*
  Если ключ имеет значение "empty" тогда давай вернем такие ключи 
  Должно получиться: We need this items: hats, socks, cookers" 
*/

//# Использование for...in / type assertion / operator keyof

function printReport(data: TotalWarehouse): string {
  const emptyItems: string[] = [];

  for (let key in data) {
    if (data[key as keyof TotalWarehouse] === "empty") {
      emptyItems.push(key);
    }
  }

  if (emptyItems.length > 0) {
    return `We need this items: ${emptyItems.join(", ")}`;
  }

  return "Everything fine";
}


//# Использование Object.entries

// function printReport(data: TotalWarehouse): string {
//   const emptyItems: string[] = [];

//   const result = Object.entries(data);
//   result.map(([key, value]) => {
//     if (value === "empty") {
//       emptyItems.push(key)
//     }
//   })

//   if (emptyItems.length > 0) {
//     return `We need this items: ${emptyItems.join(", ")}`;
//   }

//   return "Everything fine";
// }




// console.log(printReport(totalData));