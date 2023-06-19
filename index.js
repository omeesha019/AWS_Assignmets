exports.handler = async (event) => {
const inputString = event.inputString || '';
const outputString = removeVowels(inputString);
return outputString;
};

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}
