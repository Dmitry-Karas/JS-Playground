// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    return this.potions.push(potionName);
  },
};

atTheOldToad.addPotion('Невидимка');
console.log(atTheOldToad.potions);

atTheOldToad.addPotion('Зелье силы');
console.log(atTheOldToad.potions);
