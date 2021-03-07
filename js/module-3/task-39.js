// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    return this.potions.splice(this.potions.indexOf(potionName), 1);
  },
};

atTheOldToad.removePotion('Дыхание дракона');
console.log(atTheOldToad.potions);

atTheOldToad.removePotion('Зелье скорости');
console.log(atTheOldToad.potions);
