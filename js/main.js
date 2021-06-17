function getRandomFloat(min, max) {
  if (max > min & min >= 0) {
    return Math.random() * (max - min) + min;
} else {
    alert('min не может быть меньше нуля или больше max');
};
};

getRandomFloat(0, 100);
