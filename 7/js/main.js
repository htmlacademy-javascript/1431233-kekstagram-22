import {
  uploadPhotos,
  uploadCancel,
  closeModal,
  openModal,
  scaleControlSmaller,
  scaleControlBigger,
  onMinusScaleClick,
  onPlusScaleClick,
  effects,
  changeFilterHandler
} from './uploadingPhotos.js';
import {load} from './server.js'
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
// Наложение эффектов
effects.addEventListener('click', changeFilterHandler);
// Загрузка данных с сервера
load();
