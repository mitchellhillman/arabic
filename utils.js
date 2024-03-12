module.exports = {
  shuffle: (array) => {
    let currIndex = array.length,
      randomIndex;
    while (currIndex > 0) {
      randomIndex = Math.floor(Math.random() * currIndex);
      currIndex--;
      [array[currIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currIndex],
      ];
    }
    return array;
  },
};
