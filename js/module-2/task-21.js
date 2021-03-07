// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];
    
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    console.log(string);
    console.log(words);
    console.log('longest word is:', longestWord);
    
    return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog')