// * 3. Дан массив [0, 'hi', '17', true, 16, 'false', 0, 'четыре', 4]. Выведите в консоль только числа
const arr = [0, 'hi', '17', true, 16, 'false', 0, 'четыре', 4];

const displayOnlyNumbers = (arr) => {
  for (const el of arr) {
    if (typeof el === 'number') {
      console.log(el);
    }
  }
};

displayOnlyNumbers(arr);
