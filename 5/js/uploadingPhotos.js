// Форма редактирования изображения
const uploadPhotos = document.querySelector('#upload-file');
const photosUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
// Функция закрытия окна нажатием Escape
const modalEscape = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};
// Открытие окна
const openModal = function () {
  photosUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', modalEscape);
};
// Закрытие окна
const closeModal = function () {
  photosUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', modalEscape);
  uploadPhotos.value = '';
};
// Экспорт
export {uploadPhotos, uploadCancel, closeModal, openModal};

