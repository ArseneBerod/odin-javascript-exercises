function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}

const palindromes = function (string) {
	const cleanUpString = string.toLowerCase().split('').filter((item) => {
		return isAlphaNumeric(item);
	}).join('');
	const reverse = cleanUpString.split('').reverse().join('');
	return cleanUpString === reverse;
};

// Do not edit below this line
module.exports = palindromes;
