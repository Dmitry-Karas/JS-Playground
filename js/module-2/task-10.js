// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

function splitMessage(message, delimeter) {
    let words;
    words = message.split(delimeter);

    console.log(words);
    return words;
}

splitMessage('Манго спешит на поезд', ' ');