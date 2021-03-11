// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNumber = function(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
// Функция для проверки максимальной длины строки.
const checkMaxLengthString = function (checkedString, maxLength) {
  return checkedString.length <= maxLength;
};
// Функция создания массива со случайными уникальными числами
const createRandomArray = function (length, max) {
  let arrayRandomNumber = [];
  while (arrayRandomNumber.length < length) {
    let randomNamber = getRandomNumber(1, max);
    while (!arrayRandomNumber.includes(randomNamber)) {
      arrayRandomNumber[arrayRandomNumber.length] = randomNamber;
    }
  }
  return arrayRandomNumber;
};
// Экспорт функций (экспортировал checkMaxLengthString для того что бы не ругался линтер)
export {getRandomNumber, checkMaxLengthString, createRandomArray};
