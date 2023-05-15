// * 1. Дан массив [2, 4, 17, 'Hello', 90, false, 'js']. Скопируйте данные из этого массива в другой.
const arr = [2, 4, 17, 'Hello', 90, false, 'js'];

const copyArr = (arr) => {
  const newArr = [];

  for (const el of arr) {
    newArr.push(el);
  }

  return newArr;
};

console.log(copyArr(arr) === arr); // если false, значит массив успешно скопирован
