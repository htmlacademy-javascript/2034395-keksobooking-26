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

const lat = getRandomFloat(35.65000, 35.70000, 5).result;
const lng = getRandomFloat(35.65000, 35.70000, 5).result;

const advertisement = {
  author: {
    avatar: `img/avatars/user${getRandomInteger(1, 10).result}.png`,
  },
  offer:  {
    title: 'Тестовый заголовок объявления',
    address: `${lat}, ${lng}`,
    price: getRandomInteger(1, 100000).result,
    type: 'palace', // palace / flat / house / bungalow / hotel
    rooms: getRandomInteger(1, 5).result,
    guests: getRandomInteger(3, 15).result,
    checkin: '12:00', // 12:00 / 13:00 / 14:00
    checkout: '14:00', // 12:00 / 13:00 / 14:00
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'Очень крутое помещение с плазмой и мягкой кроватью.',
    photos: [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
    ]
  },
  location: {lat, lng,},
};
