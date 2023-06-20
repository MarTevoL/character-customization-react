export const renderbuttonItem = (number) => {
  let array = [];
  for (let index = 0; index < number; index++) {
    array.push(`${index + 1}`);
  }
  return array;
};
