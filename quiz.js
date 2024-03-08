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
  const words = shuffle(Object.keys(pairs))

  for (let step = 0; step < words.length; step++) {
    const word = words[step]
    await new Promise(resolve => rl.question(`${step + 1}/${words.length}: ${word}`, resolve))
    
    console.log(`${word} => ${pairs[word]}`)
  }
  console.log('\nComplete!')
  rl.close()
})()
