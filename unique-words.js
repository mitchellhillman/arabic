const string = require("./alsinwar.js");

function getUniqueWords(string) {
  return string
    .split(" ")
    .sort()
    .map((word) => word.replace(/[^ء-ي]+/g, ""))
    .filter((word) => !word.match(/[a-z0-9]/gi))
    .filter((word) => word != "")
    .reduce((acc, curr) => {
      if (acc.indexOf(curr) < 1) {
        acc.push(curr);
      }
      return acc;
    }, []);
}
const uniques = getUniqueWords(string);
const csvString = uniques.map((word) => `${word}, "foobar"`).join("\n");
require("fs").writeFile(
  "./uniques.csv",

  csvString,

  function (err) {
    if (err) {
      console.error("Crap happens");
    }
  }
);
