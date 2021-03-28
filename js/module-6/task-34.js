// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
console.log('~ ascendingReleaseDates', ascendingReleaseDates);

const alphabeticalAuthors = [...authors].sort();
console.log('~ alphabeticalAuthors', alphabeticalAuthors);
