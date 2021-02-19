// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
    let cost = 0;

    message = message.split(' ');
    cost = message.length * pricePerWord;
    
    console.log(message);
    console.log(cost);

    return cost;
}

calculateEngravingPrice('JavaScript у меня в крови', 10)