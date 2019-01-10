var args = process.argv.slice(2);

function rollDice(input) {
  var randomNum = [];
  var finalStr = 'Rolled ' + args + " dice" + ": ";
  for (var i = 0; i < input; i++) {  
    if (i < input) {
      finalStr += (Math.floor(Math.random() * Math.floor(6) + 1)) + ", ";
    } 
  }    
  finalStr = finalStr.slice(0, -2);   
  console.log(finalStr);  
}
rollDice(args);