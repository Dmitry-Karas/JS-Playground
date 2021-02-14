// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещённых слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещённых слов, функция возвращает буль false.

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
    message = message.toLowerCase();
    result = message.includes('spam') || message.includes('sale');
    
    console.log(result);
  // Пиши код выше этой строки
  return result;
}
checkForSpam('SpAm');
