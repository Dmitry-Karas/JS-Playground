// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }

  console.log(propCount);

  return propCount;
}

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
