const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-checked', (event) => {
    const prime = event.detail;
    // console.log('result-checked', prime);
    this.displayResult(prime);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  let displayText = result ? "Yes! It's a prime number." : "No! It's not a prime number.";
  resultElement.textContent = displayText;
};

module.exports = ResultView;
