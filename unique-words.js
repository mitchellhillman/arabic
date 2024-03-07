const string = require('./alsinwar.js')

function getUniqueWords(string) {
  return string
    .split(' ')
    .sort()
    .map(word => word.replace(/[^ء-ي]+/g, ''))
    .filter(word => !word.match(/[a-z0-9]/ig))
    .filter(word => word != "")
    .reduce((acc, curr) => {                
        if(acc.indexOf(curr) < 1) {
            acc.push(curr)
        }
        return acc
    }, [])
}
const uniques = getUniqueWords(string)

const pairs = uniques.map(word => {
    return {arabic: word, english: 'foobar'}
})

require('fs').writeFile(

    './vocab.json',

    JSON.stringify(pairs),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
  for (pair of pairs) {
    let answer = await new Promise(resolve => rl.question(pair.arabic, resolve))
    console.log(`${answer === pair.english}! ${pair.arabic} means ${pair.english}`)
  }
  console.log('complete!')
  readline.close()
})()
