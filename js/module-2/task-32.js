// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).


function includes(array, value) {
    for (const i of array) {
        if (i === value) {
            console.log(i === value);
            return i === value;
        }
    }
    
    console.log(false);
    return false;
}

includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);