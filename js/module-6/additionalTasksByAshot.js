const users = [
  { name: 'Игорь', sex: 'male', age: 29 },
  { name: 'Михаил', sex: 'male', age: 21 },
  { name: 'Ирина', sex: 'female', age: 25 },
  { name: 'Олег', sex: 'male', age: 14 },
  { name: 'Марина', sex: 'female', age: 23 },
  { name: 'Оксана', sex: 'female', age: 17 },
  { name: 'Алексей', sex: 'male', age: 8 },
  { name: 'Антон', sex: 'male', age: 47 },
  { name: 'Валерия', sex: 'female', age: 50 },
  { name: 'Екатерина', sex: 'female', age: 12 },
];

/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/

const findJrUser = users => {
  const filteredUsers = users
    .filter(user => user.age >= 18)
    .sort((a, b) => a.age - b.age);

  const jrUser = filteredUsers[0];

  switch (jrUser.sex) {
    case 'male':
      console.log(`${jrUser.name} самый молодой и ему ${jrUser.age} лет`);
      break;

    case 'female':
      console.log(`${jrUser.name} самая молодая и ей ${jrUser.age} лет`);
      break;

    default:
      console.log(`${jrUser.name} самый молодой и ему/ей ${jrUser.age} лет`);
      break;
  }
  //   return jrUser.sex === 'male'
  //     ? `${jrUser.name} самый молодой и ему ${jrUser.age} лет`
  //     : `${jrUser.name} самый молодой и ей ${jrUser.age} лет`;
};

// findJrUser(users);

// =======================================================================

/* 
  2. В массиве users отфильтровать всех по полу, сначала female потом male 
*/

const filterBySex = (users, sex) => {
  return users.filter(user => user.sex === sex);
};

// console.log(filterBySex(users, 'female'));
// console.log(filterBySex(users, 'male'));

// =======================================================================

/* 
3. В массиве users найти пользователя по имени Марина
*/

const findUserByName = (users, name) => {
  return users.find(user => user.name === name);
};

// console.log(findUserByName(users, 'Ирина'));

// =======================================================================

/* 
4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
если женщина снять 5 лет
!!! Важно проверять что возраст не отрицательное число :)
*/

const changeAge = users => {
  return users.map(user => {
    if (user.age >= 0 && user.sex === 'male') {
      return { name: user.name, sex: user.sex, age: user.age + 10 };
    } else if (user.age >= 0 && user.sex === 'female') {
      return { name: user.name, sex: user.sex, age: user.age - 5 };
    }
  });
};

console.log('~ changeAge', changeAge(users));

// =======================================================================
