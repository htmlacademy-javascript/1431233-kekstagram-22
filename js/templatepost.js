// Шаблон изображения случайного пользователя
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');
const setupPostList = document.querySelector('.pictures');
const generatePostBlock = function (post) {
  let postElement = postTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = post.url;
  postElement.querySelector('.picture__likes').textContent = post.likes;
  postElement.querySelector('.picture__comments').textContent = post.comment.length;

  return postElement;
};
const generateGroupPosts = function (collection) {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < collection.length; i++) {
    fragment.appendChild(generatePostBlock(collection[i]));
  }
  return fragment;
};
export {setupPostList, generateGroupPosts};
