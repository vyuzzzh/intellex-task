const fs = require('fs');

const sumIndex = (arr) => {
  let leftSum = 0;
  let rightSum = arr.reduce((sum, el) => sum + Number(el), 0);

  let resultSum = 0;

  arr.forEach((el, index) => {
    rightSum -= Number(el);
    if (leftSum === rightSum) {
      resultSum += index;
    }
    leftSum += Number(el);
  });
  return resultSum === 0 ? 'таких индексов нет' : resultSum;
};

fs.readFile('./data.txt', (err, data) => {
  if (err) throw err;
  const array = data.toString().split(',');
  const result = sumIndex(array);
  console.log(result);
});
