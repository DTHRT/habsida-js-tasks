// * 6. Создайте 2 массива, содержащие по 5 чисел, которые вводит пользователь и сравните значения из массивов, находящиеся под одним индексомa
const arr1 = ask5Numbers();
const arr2 = ask5Numbers();

compareElements(arr1, arr2);

function ask5Numbers() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt(`Введите ${i + 1} число:`, 0));
  }
  return arr;
}

function compareElements(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      alert(`${i + 1}) ${arr1[i]} = ${arr2[i]}`);
    }

    if (arr1[i] < arr2[i]) {
      alert(`${i + 1}) ${arr1[i]} < ${arr2[i]}`);
    }

    if (arr1[i] > arr2[i]) {
      alert(`${i + 1}) ${arr1[i]} > ${arr2[i]}`);
    }
  }
}
