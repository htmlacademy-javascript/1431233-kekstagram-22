// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNumber = function(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
// Функция для проверки максимальной длины строки.
const checkMaxLengthString = function (checkedString, maxLength) {
  return checkedString.length <= maxLength;
};
// Функция создания массивов со случайными уникальными числами
const creationArrayRandom = function (length, max) {
  let arrayRandomNumber = [];
  while (arrayRandomNumber.length < length) {
    let randomNamber = getRandomNumber(1, max);
    let found = false;
    for (let i = 0; i < arrayRandomNumber.length; i++) {
      if (arrayRandomNumber[i] === randomNamber) {
        found = true;
        break;
      }
    }
    if (!found) {
      arrayRandomNumber[arrayRandomNumber.length] = randomNamber;
    }
  }
  return arrayRandomNumber;
};
// Экспорт функций (экспортировал checkMaxLengthString для того что бы не ругался линтер)
export {getRandomNumber, checkMaxLengthString, creationArrayRandom};
