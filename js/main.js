const getRandomInteger = (min, max) => {
  let error = false;
  let message;
  let result;

  if (min < 0) {
    error = true;
    message = 'Диапазон чисел должен быть положительным';
  }

  if (min >= max) {
    error = true;
    message = 'Значение поля "до" должно быть больше значения поля "от".';
  }

  if (!error) {
    result = Math.round(Math.random() * (max - min) + min);
  }

  return {error, message, result};
};

const getRandomFloat = (min, max, float) => {
  let error = false;
  let message;
  let result;

  if (min < 0) {
    error = true;
    message = 'Диапазон чисел должен быть положительным';
  }

  if (min >= max) {
    error = true;
    message = 'Значение поля "до" должно быть больше значения поля "от"';
  }

  if (float < 0) {
    error = true;
    message = 'Количество знаков после запятой должно быть больше или равно 0';
  }

  if (!error) {
    result = (Math.random() * (max - min) + min).toFixed(float);
  }

  return {error, message, result};
};

const getAvatarUrl = (value) => {
  const userId = String(value).length === 1 ? `0${value}` : value;

  return `img/avatars/user${userId}.png`;
};

const getRandomArray = (array, min, max) => {
  const result = [];

  for (let i = 0; i <= max; i++) {
    const randomElement = array[getRandomInteger(min, max).result];

    if (!result.includes(randomElement)) {
      result.push(randomElement);
    }
  }

  return result;
};

const generateAdvertisementSequence = (checkArr, typeArr, featuresArr, photosArray) => {
  const array = [];

  for (let i = 1; i <= 10; i++) {
    const avatar = getAvatarUrl(i);

    const maxPrice = 100000;
    const maxRooms = 3;
    const maxGuests = 15;

    const type =  typeArr[getRandomInteger(0, typeArr.length - 1).result];
    const checkin = checkArr[getRandomInteger(0, checkArr.length - 1).result];
    const checkout = checkArr[getRandomInteger(0, checkArr.length - 1).result];

    const maxFeatures = getRandomInteger(0, featuresArr.length - 1).result;
    const features = getRandomArray(featuresArr, 0, maxFeatures);

    const description = 'Очень крутое помещение с плазмой и мягкой кроватью.';

    const maxPhotos = getRandomInteger(0, photosArray.length - 1).result;
    const photos = getRandomArray(photosArray, 0, maxPhotos);

    const lat = getRandomFloat(35.65000, 35.70000, 5).result;
    const lng = getRandomFloat(35.65000, 35.70000, 5).result;

    const location = {lat, lng};

    const obj = {
      author: {
        avatar,
      },
      offer: {
        title: 'Тестовый заголовок объявления',
        address: `${location.lat}, ${location.lng}`,
        price: getRandomInteger(1, maxPrice).result,
        type,
        rooms: getRandomInteger(1, maxRooms).result,
        guests: getRandomInteger(1, maxGuests).result,
        checkin,
        checkout,
        features,
        description,
        photos
      },
      location,
    };

    array.push(obj);
  }

  return array;
};

const checkVariables = ['12:00', '13:00', '14:00'];
const typeVariables = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const featuresVariables = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosVariables = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const advertisements = generateAdvertisementSequence(checkVariables, typeVariables, featuresVariables, photosVariables);
