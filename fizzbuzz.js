var FizzBuzz = function() {

};

FizzBuzz.prototype.divisibleBy = function(number, divisor) {
	return number % divisor === 0;
};

FizzBuzz.prototype.convertToFizzBuzz = function(number) {
	if (number % 15 === 0) {
		return "FizzBuzz";
	}
	if (number % 3 === 0) {
		return "Fizz";
	}
	if (number % 5 === 0) {
		return "Buzz";
	}
	return number.toString();
};

module.exports = FizzBuzz;