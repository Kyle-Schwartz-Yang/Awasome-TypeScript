
export = {}


// Обычно для unknown применяется Narrowing (сужение)

async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data: unknown = await response.json(); // Дані спочатку мають тип unknown

  // Перевіряємо тип даних перед використанням
  if (isValidData(data)) {
    // Тепер TypeScript знає, що це правильна структура
    console.log(data.name, data.age);
  } else {
    console.error('Invalid data');
  }
}

// Функція перевірки типів
function isValidData(data: any): data is { name: string; age: number } {
  return typeof data === 'object' && data !== null && 'name' in data && 'age' in data;
}