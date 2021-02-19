// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
    let total = 0;

    for (const value of order) {
        total += value;
    }

    console.log(total);
    
    return total;
}

calculateTotalPrice([12, 85, 37, 4])