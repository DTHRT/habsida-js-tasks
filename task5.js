// * 5. Создайте массив, содержащие числа от 0 до 30, используя цикл и выведите в консоль только чётные числа

const randNumbers = () => {
  const arr = [];
  for (let i = 0; i <= 30; i++) {
    arr.push(i);
  }

  for (const el of arr) {
    if (el % 2 === 0) {
      console.log(el);
    }
  }
};

randNumbers();
