// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  //   const keys = Object.keys(object);

  //   for (const key of keys) {
  //       propCount += 1;
  //   }

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  console.log(propCount);

  return propCount;
}

countProps({ name: 'Mango', age: 2 });
