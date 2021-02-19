// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

function filterArray(numbers, value) {
    const array = [];
    for (const number of numbers) {
        if (number > value) {
            array.push(number);
        }
    }
    
    console.log(array);
    
    return array;
}

filterArray([12, 24, 8, 41, 76], 20)