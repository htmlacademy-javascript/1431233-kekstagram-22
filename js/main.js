// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNumber = function(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
// Функция для проверки максимальной длины строки.
const maxLengthString = function (checkedString, maxLength) {
  if (checkedString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

// Присвоил значение что бы не ругалось
getRandomNumber(1 , 3);
maxLengthString('test', 5);
