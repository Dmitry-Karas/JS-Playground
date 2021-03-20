// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// function calculateTotalPrice(quantity, pricePerItem) {

//   return quantity * pricePerItem;
// }

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice(5, 5));
