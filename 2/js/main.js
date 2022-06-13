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
  return {error: error, message: message, result: result};
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
  return {error: error, message: message, result: result};
};

getRandomInteger(0, 10);
getRandomFloat(0, 10, 3);
