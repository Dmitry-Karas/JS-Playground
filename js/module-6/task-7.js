// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Пиши код ниже этой строки
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  console.log('~ filteredNumbers', filteredNumbers);

  return filteredNumbers;
};

filterArray([1, 2, 3, 4, 5], 3);
