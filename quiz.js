const pairs = require('./vocab.json')

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
  const arabicWords = Object.keys(pairs)
  for (word of arabicWords) {
    await new Promise(resolve => rl.question(word, resolve))
    console.log(`${word} => ${pairs[word]}`)
  }
  console.log('\nComplete!')
  rl.close()
})()
