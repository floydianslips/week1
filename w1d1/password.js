var args = process.argv[2];
function obfuscate(string) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == 'a') {
      result += '4';
    } else if (string.charAt(i) == 'e') {
      result += '3';
    } else if (string.charAt(i) == 'o') {
      result += '0';
    } else if (string.charAt(i) == 'i') {
      result += '1';
    } else {result += string.charAt(i)}
  }
  return result;
}
console.log(obfuscate(args));