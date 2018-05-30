var fs = require('fs');
var file = '../test.txt';
var fileCount = require('./filecount');

fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err;
  var wordsArray = fileCount.data.splitByWords(data);
  var wordsMap = fileCount.data.createWordMap(wordsArray);
  var finalWordsArray = fileCount.data.sortByCount(wordsMap);

  console.log(finalWordsArray);
  console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
    finalWordsArray[0].total + ' times');
});