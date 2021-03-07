// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    return this.potions.splice(this.potions.indexOf(oldName), 1, newName);
  },
};

console.log(atTheOldToad.potions);

atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
console.log(atTheOldToad.potions);

atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка');
console.log(atTheOldToad.potions);
