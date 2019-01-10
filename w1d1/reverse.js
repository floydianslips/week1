var args = process.argv.slice(2);
function reverse(input) {
  for (var j = 0; j < input.length; j++) {
    var str = '';
    for (var i = input[j].length -1; i >= 0; i--) {
      str += input[j][i];
    }
    console.log(str);
  }
}
reverse(args);