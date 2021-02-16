
import {postList, generateGroupPosts} from './templatePost.js';
import {generateArrayPosts} from './generation.js';
import {uploadPhotos, uploadCancel, closeModal, openModal} from './uploadingPhotos.js';

// Формируем ленту
postList.appendChild(generateGroupPosts(generateArrayPosts(25)));
// Открытие и закрытия окна редактирования нового фото
uploadPhotos.addEventListener('change', function () {
  openModal();
});
uploadCancel.addEventListener('click', function () {
  closeModal();
});
