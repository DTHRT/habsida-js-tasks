// * 4. Создайте массив из 15 рандомно сгеннерированных чисел в диапазоне от 5 до 20. Сперва выведите массив а потом сумму всех чисел в массиве

const randNumbers = (min, max) => {
  const arr = [];
  for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }

  console.log(arr);

  let total = 0;
  for (const el of arr) {
    total += el;
  }

  console.log(total);
};

randNumbers(5, 20);
