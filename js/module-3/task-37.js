// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    return atTheOldToad.potions;
  },
};

console.log(atTheOldToad.getPotions());
