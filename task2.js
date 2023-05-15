// * 2. Дан массив [0, 1, 5, 16, 22, 17, 8, 100, 1700]. Выведите только те значение, которые больше 20-ти
const arr = [0, 1, 5, 16, 22, 17, 8, 100, 1700];

const displayNumbersGreater20 = () => {
  for (const el of arr) {
    if (el > 20) {
      console.log(el);
    }
  }
};

displayNumbersGreater20(arr);
