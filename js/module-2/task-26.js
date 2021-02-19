// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
    let total = 0;
    
//  for (let i = 0; i < order.length; i += 1) {
//  total += order[i];
//}

    for (const value of order) {
        total += value;    
    }

    console.log(total);

    return total;
    
}

calculateTotalPrice([12, 85, 37, 4]) 