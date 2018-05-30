var expect    = require("chai").expect;
var fs = require('fs');
var file = __dirname + '/test.txt';
var fc = require('../app/filecount');
file1 = fs.readFileSync(file, 'utf-8');

describe("count individual words from file", function() {
    var wordsArray = fc.data.splitByWords(file1);
    var wordsMap = fc.data.createWordMap(wordsArray);
    var finalWordsArray = fc.data.sortByCount(wordsMap);
    it("count individual words - positive", function() {
      expect(finalWordsArray.length).to.equal(4);
      expect(finalWordsArray[1].name).to.equal('beginning');
    });
    it("count individual words - negative", function() {
      expect(finalWordsArray.length).to.not.equal(5);
    });
    it("display occurance of individual words - positive", function() {
      expect(finalWordsArray[0].total).to.equal(2);
    });
    it("display occurance of individual words - negative", function() {
      expect(finalWordsArray[0].total).to.not.equal(1);
    });
    it("check if occurance of individual words is prime number - positive", function() {
      var occurance = finalWordsArray[0].isPrime;
      expect(occurance).to.be.true;
    });
    it("check if occurance of individual words is prime number - negative", function() {
      var occurance = finalWordsArray[0].isPrime;
      expect(occurance).to.not.be.false;
    });
});