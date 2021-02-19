// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
    const numbers = [];

    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }

    console.log(numbers);
    
    return numbers;
}

createArrayOfNumbers(14, 17);