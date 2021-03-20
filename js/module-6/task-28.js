// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
console.log('~ anyElementInFirstIsEven', anyElementInFirstIsEven);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);
console.log('~ anyElementInFirstIsOdd', anyElementInFirstIsOdd);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
console.log('~ anyElementInSecondIsEven', anyElementInSecondIsEven);
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);
console.log('~ anyElementInSecondIsOdd', anyElementInSecondIsOdd);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
console.log('~ anyElementInThirdIsEven', anyElementInThirdIsEven);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);
console.log('~ anyElementInThirdIsOdd', anyElementInThirdIsOdd);
