function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  const array3 = []
  array3.includes(array2)
  for (i = 0; i < array1.length; i++) {
  for ( j = 0; j< array2.length; j++) { 
    if(array1[i] === array2[j]){
      array3.push(array1[i]); 
    }
  }
  }
  return array3
  // Пиши код выше этой строки
}
console.log(getCommonElements([1, 2, 3], [2, 3,4]))