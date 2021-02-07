// Массив сообщений для комментариев
const MESSAGES = [
  'Все отлично',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
// Массив имен [name] пользователей
const NAMES = [
  'Глеб',
  'Владимир',
  'Виктор',
  'Антон',
  'Михаил',
  'Дмитрий',
  'Валера',
  'Сергей',
  'Анатолий',
  'Леонид',
];
// ID комментраиев
let idComment = 0;
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNumber = function(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
// Функция для проверки максимальной длины строки.
const checkMaxLengthString = function (checkedString, maxLength) {
  return checkedString.length <= maxLength;
};
// Массив генерации комментария
const generateArrayComments = function (amount) {
  const comments = [];
  for (let i = 0; i < amount; i++) {
    comments.push({
      id: Math.round((new Date).getTime()) + (idComment += 1),
      avatar: 'img/avatar-' + getRandomNumber(1 , 6) + '.svg',
      message: MESSAGES[getRandomNumber(1 , MESSAGES.length - 1)],
      name: NAMES[getRandomNumber(1 , NAMES.length - 1)],
    });
  }
  return comments;
}
// Массив генерации постов
const generateArrayPosts = function (amountPosts) {
  const posts = [];
  for (let i = 0; i < amountPosts; i++) {
    posts.push({
      id: posts.length + 1,
      url: 'photos/' + (posts.length + 1) + '.jpg',
      description: 'Описание фотографии',
      likes: getRandomNumber(15, 200),
      comment: generateArrayComments(getRandomNumber(1, 10)),
    });
  }
  return posts;
}

// Присвоил значение что бы не ругалось
checkMaxLengthString('test', 5);
generateArrayPosts(25);
