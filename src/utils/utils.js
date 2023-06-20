export const renderbuttonItem = (number) => {
  let array = [];
  for (let index = 0; index < number; index++) {
    array.push(`${index + 1}`);
  }
  return array;
};

export const randomNumber = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
  return randomNumber;
};
