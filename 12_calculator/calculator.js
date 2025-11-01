const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((previous, current) => previous + current, 0);
};

const multiply = function(array) {
	return array.reduce((previous, current) => previous * current, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(value) {
	if (value === 0) {
		return 1;
	}
	return value * factorial(value - 1)
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
