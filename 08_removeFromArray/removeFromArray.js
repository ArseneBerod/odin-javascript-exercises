const removeFromArray = function(array, ...targets) {
	return array.filter(item => !targets.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
