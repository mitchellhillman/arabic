const readline = require("readline");
const fs = require("fs");
const { parse } = require("csv-parse");
const { shuffle } = require("./utils.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let phrases = [];

const quizArabicEng = async () => {
  for (let step = 0; step < phrases.length; step++) {
    const count = `${step + 1}/${phrases.length}: `;
    const tab = count
      .split("")
      .map(() => " ")
      .join("");
    await new Promise((resolve) =>
      rl.question(`${count}${phrases[step][0].trim()} `, resolve)
    );
    console.log(`${tab}=> ${phrases[step][1].trim()}\n`);
  }

  console.log("Complete!");
  rl.close();
};

const quizEngArabic = async () => {
  for (let step = 0; step < phrases.length; step++) {
    const count = `${step + 1}/${phrases.length}: `;
    const tab = count
      .split("")
      .map(() => " ")
      .join("");
    await new Promise((resolve) =>
      rl.question(`${count}${phrases[step][1].trim()} `, resolve)
    );
    console.log(`${tab}=> ${phrases[step][0].trim()}\n`);
  }

  console.log("Complete!");
  rl.close();
};


fs.createReadStream("./vocab.csv")
  .pipe(parse({ delimiter: "," }))
  .on("data", (row) => {
    phrases.push(row);
  })
  .on("end", () => {
    quizEngArabic(shuffle(phrases));
  });
