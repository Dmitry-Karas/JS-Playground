// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const propValues = [];

  //   for (const product of products) {
  //     const keys = Object.keys(product);

  //     for (const key of keys) {
  //       if (key === propName) {
  //         propValues.push(product[key]);
  //       }
  //     }
  //   }

  for (const product of products) {
    const keys = Object.keys(product);

    if (keys.includes(propName)) {
      propValues.push(product[propName]);
    }
  }

  console.log(propValues);

  return propValues;
}

getAllPropValues('name');
getAllPropValues('quantity');
getAllPropValues('price');
getAllPropValues('category');
