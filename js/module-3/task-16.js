// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const values = Object.values(salaries);

  console.log('Salaries:\n', values);

  for (const value of values) {
    totalSalary += value;
  }

  console.log('Total salaries:\n', totalSalary);

  return totalSalary;
}

countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
