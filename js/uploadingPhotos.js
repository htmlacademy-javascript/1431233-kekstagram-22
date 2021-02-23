// Форма редактирования изображения
const uploadPhotos = document.querySelector('#upload-file');
const photosUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
// Функция закрытия окна нажатием Escape
const escPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};
// Открытие окна
const openModal = function () {
  photosUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', escPress);
};
// Закрытие окна
const closeModal = function () {
  photosUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', escPress);
  uploadPhotos.value = '';
};
// Масштабирование
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
// Процент масштабирования
const value = {
  min: 25,
  max: 100,
};
// Уменьшение масштаба изображения yнажатием на минус
const onMinusScaleClick = function () {
  let scale = parseInt(scaleControlValue.value, 10);
  if (scale <= value.max && scale > value.min) {
    scale -= value.min;
  }
  imageScaleChange(scale);
};
// Увеличение масштаба изображения yнажатием на плюс
const onPlusScaleClick = function () {
  let scale = parseInt(scaleControlValue.value, 10);
  if (scale >= value.min && scale < value.max) {
    scale += value.min;
  }
  imageScaleChange(scale);
};
// Функция изменения масштаба
const imageScaleChange = function (number) {
  switch (number) {
    case 25:
      imageUploadPreview.style.transform = 'scale(0.25)';
      scaleControlValue.value = number + '%';
      break;
    case 50:
      imageUploadPreview.style.transform = 'scale(0.50)';
      scaleControlValue.value = number + '%';
      break;
    case 75:
      imageUploadPreview.style.transform = 'scale(0.75)';
      scaleControlValue.value = number + '%';
      break;
    case 100:
      imageUploadPreview.style.transform = 'scale(1.00)';
      scaleControlValue.value = number + '%';
      break;
  }
};
// Эффект на изображение
// Глубина эффекта по умолчанию
const defaultEffectLevel = 100;
// Максимальное значение для разных эффектов
const MAX_EFFECTS_VALUES = {
  chrome: 1,
  sepia: 1,
  marvin: 100,
  phobos: 3,
  heat: [1, 2],
};

const effects = document.querySelector('.effects');
const effectLevel = document.querySelector('.effect-level');
const effectLevelPin = effectLevel.querySelector('.effect-level__pin');
const effectLevelLine = effectLevel.querySelector('.effect-level__line');
const effectLevelDepth = effectLevel.querySelector('.effect-level__depth');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');
const effectsItemDefault = document.querySelector('.effects__item:first-child');
const effectsItem = document.querySelectorAll('.effects__item');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

imgUploadEffectLevel.classList.add('hidden');

const changeFilter = function(evt) {
  if (evt.target.matches('input[type="radio"]')) {
    imageUploadPreview.className = '';
    setDefaultDepth();
    imageUploadPreview.className = 'effects__preview--' + evt.target.value;
    imageUploadPreview.style.transform = 'scale(1.00)';
    scaleControlValue.value = 100 + '%';
  }
};
// Глубина эффекта по умолчанию
const setDefaultDepth = function() {
  effectLevelPin.style.left = defaultEffectLevel + '%';
  effectLevelDepth.style.width = defaultEffectLevel + '%';
  effectLevelValue.value = defaultEffectLevel;
  imageUploadPreview.style.filter = '';
};
// Применение и настройка глубины эффекта
const setNewEffectDepth = function(levelValue) {
  const value = levelValue / 100;
  if (imageUploadPreview.className.match('effects__preview--')) {
    switch (imageUploadPreview.className) {
      case 'effects__preview--chrome':
        imageUploadPreview.style.filter = 'grayscale(' + (MAX_EFFECTS_VALUES.chrome * value) + ')';
        break;
      case 'effects__preview--sepia':
        imageUploadPreview.style.filter = 'sepia(' + (MAX_EFFECTS_VALUES.sepia * value) + ')';
        break;
      case 'effects__preview--marvin':
        imageUploadPreview.style.filter = 'invert(' + levelValue + '%)';
        break;
      case 'effects__preview--phobos':
        imageUploadPreview.style.filter = 'blur('+ (MAX_EFFECTS_VALUES.phobos * value)+'px)';
        break;
      case 'effects__preview--heat':
        imageUploadPreview.style.filter = 'brightness(' + (MAX_EFFECTS_VALUES.heat[1] * value + MAX_EFFECTS_VALUES.heat[0])+')';
        break;
      default:
        imageUploadPreview.style.filter = '';
    }
  }
};
// Функция изменения глубины объекта ползунком слайдера
const effectsLevelMouseDown = function(evt) {
  evt.preventDefault();
  // Длина слайдера
  const lineWidth = effectLevelLine.offsetWidth;
  // Начальное положение
  let startCoordinates = evt.clientX;
  // Изменения положения ползунка
  const effectLevelMove = function(move) {
    move.preventDefault();

    const shift = startCoordinates - move.clientX;
    const pinX = effectLevelPin.offsetLeft - shift;

    startCoordinates = move.clientX;

    if (!(pinX < 0 || pinX > lineWidth)) {
      const pinPoint = pinX / lineWidth;
      effectLevelPin.style.left = pinX + 'px';
      effectLevelValue.value = Math.round(pinPoint * 100);
      effectLevelDepth.style.width = Math.round(pinPoint * 100) + '%';
      setNewEffectDepth(effectLevelValue.value);
    }
  };
  const effectLevelMouseUp = function(upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', effectLevelMove);
    document.removeEventListener('mouseup', effectLevelMouseUp);
  };
  document.addEventListener('mousemove', effectLevelMove);
  document.addEventListener('mouseup', effectLevelMouseUp);
};
// Отображение слайдера (кроме эффекта "ОРИГИНАЛ")
effectsItem.forEach((item) => {
  item.addEventListener('click', () => {
    imgUploadEffectLevel.classList.remove('hidden');
  });
});
// Сокрытие слайдера на "ОРИГИНАЛ"
effectsItemDefault.addEventListener('click', () => {
  imgUploadEffectLevel.classList.add('hidden');
});
// Экспорт
export {
  effectLevelPin,
  effectsLevelMouseDown,
  uploadPhotos,
  uploadCancel,
  closeModal,
  openModal,
  imageUploadPreview,
  scaleControlSmaller,
  scaleControlBigger,
  onMinusScaleClick,
  onPlusScaleClick,
  effects,
  changeFilter
};

