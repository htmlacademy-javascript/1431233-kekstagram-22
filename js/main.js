import {postList, generateGroupPosts} from './templatePost.js';
import {generateArrayPosts} from './generation.js';
import {
  uploadPhotos,
  uploadCancel,
  closeModal,
  openModal,
  scaleControlSmaller,
  scaleControlBigger,
  onMinusScaleClick,
  onPlusScaleClick,
  effectLevelPin,
  effectsLevelMouseDown,
  effects,
  changeFilter
} from './uploadingPhotos.js';

// Формируем ленту
postList.appendChild(generateGroupPosts(generateArrayPosts(25)));
// Открытие и закрытия окна редактирования нового фото
uploadPhotos.addEventListener('change', function () {
  openModal();
});
uploadCancel.addEventListener('click', function () {
  closeModal();
});
// Уменьшение изображение в редакторе
scaleControlSmaller.addEventListener('click', onMinusScaleClick);
// Увеличение изображение в редакторе
scaleControlBigger.addEventListener('click', onPlusScaleClick);
// Интенсивность эффекта
effectLevelPin.addEventListener('mousedown', effectsLevelMouseDown);
// Выбор эффекта
effects.addEventListener('click', changeFilter);
