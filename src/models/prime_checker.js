const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    // console.log('event noticed in prime checker');
    const inputtedNumber = event.detail;
    const result = this.checkPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-checked', result);
    // console.log('published prime');

  });
};

PrimeChecker.prototype.checkPrime = function (number) {
  // console.log('checking prime in prime checker');
  if (number < 2) {return false;}
  for (let i = 2; i <= Math.trunc(Math.sqrt(number)); i++) {
    if (number % i === 0) {return false;}
    // console.log(number, i, number % i === 0)
  }
  return true;
};

module.exports = PrimeChecker;
