var _ = require('lodash');
var string = '1113122113';
var array = string.split('').map(Number);
// console.log(array);

function lookAndSay(array){
  var counted = array[0];
  var counter = 1;
  var result = [];
  for (var i=1; i<array.length+1; i++){
    if(array[i]===counted){
      counter++;
    }
    else{
      result.push(counter);
      result.push(counted);
      counted = array[i];
      counter = 1;
    }
  }
  return result;
}

for(var i=0; i<40; i++){
  array = lookAndSay(array);
}
console.log(array.length);
