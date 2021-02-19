// Переопредели значения элементов с индексами 1 и 3. Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
console.table(fruits);

fruits[1] = 'персик';
fruits[fruits.length - 1] = 'банан';

console.table(fruits);
