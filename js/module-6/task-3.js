// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  //   for (let i = 0; i < firstArray.length; i += 1) {
  //     if (secondArray.includes(firstArray[i])) {
  //       commonElements.push(firstArray[i]);
  //     }
  //   }

  firstArray.forEach(element => {
    console.log(element);

    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  console.log('~ commonElements', commonElements);

  return commonElements;
}

getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
