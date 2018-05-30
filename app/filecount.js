var methods = {
    splitByWords: function(text) {
        var wordsArray = text.split(/\s+/);
        return wordsArray;
      },
      createWordMap: function(wordsArray) {
        var wordsMap = {};
        wordsArray.forEach(function (key) {
          if (wordsMap.hasOwnProperty(key)) {
            wordsMap[key]++;
          } else {
            wordsMap[key] = 1;
          }
        });
        return wordsMap;
      }, 
      sortByCount: function(wordsMap) {
        var finalWordsArray = [];
        finalWordsArray = Object.keys(wordsMap).map(function(key) {
          return {
            name: key,
            total: wordsMap[key],
            isPrime: isPrime(wordsMap[key])
          };
        });
      
        finalWordsArray.sort(function(a, b) {
          return b.total - a.total;
        });
      
        return finalWordsArray;
      }
}

function isPrime(num){
    let flag = true;
    let isPrime = '';
    if (num === 0 || num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (flag) {
        if(num % i === 0) {
          isPrime = false;
          flag = false;
        } else {
          isPrime = true;
        }
      }
    }
    return isPrime;
  }
exports.data = methods;