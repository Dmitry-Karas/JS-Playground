// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    let array = firstArray.concat(secondArray);
    console.log(array);
    
    if (array.length > maxLength) {
        array = array.slice(0, maxLength);
    }
    
    console.log(array);
    
    return array;
}

makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
