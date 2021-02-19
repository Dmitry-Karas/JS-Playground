// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

function getEvenNumbers(start, end) {
    const evenNumbers = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i)
        }
    }
    console.log(evenNumbers);

    return evenNumbers;
}

getEvenNumbers(6, 12);