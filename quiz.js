const pairs = require('./vocab.json')

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const shuffle = (array) => {
  let currIndex = array.length, randomIndex;
  while(currIndex > 0) {
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex--;
    [array[currIndex], array[randomIndex]] = [array[randomIndex], array[currIndex]];
  }
  return array
}

(async () => {
  const arabicWords = Object.keys(pairs)
  const shuffled = shuffle(arabicWords)
  for (word of shuffled) {
    await new Promise(resolve => rl.question(word, resolve))
    console.log(`${word} => ${pairs[word]}`)
  }
  console.log('\nComplete!')
  rl.close()
})()
