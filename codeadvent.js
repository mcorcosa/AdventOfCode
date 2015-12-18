var fs = require('fs');
var array = fs.readFileSync('inputs/day8.txt').toString().split("\n");
// var array = fs.readFileSync('inputs/day8dummy.txt').toString().split("\n");
var codeCharacters = -1;
var memoryCharacters = 0;

for (var i=0; i<array.length; i++){
  codeCharacters += array[i].length-1;
  console.log(array[i].length);
  console.log(array[i]);
  for (var j=0; j<array[i].length-1; j++){
    if(array[i][j]==='\\'){
      if(array[i][j+1]==='"'){
        memoryCharacters--;
      }
      else if(array[i][j+1]==='x'){
        memoryCharacters -=3;
      }
    }
    console.log(j+": "+array[i][j]);
  }
  console.log("\n");
}

console.log("code: "+codeCharacters);
memoryCharacters = codeCharacters+memoryCharacters;
console.log("mem: "+memoryCharacters);
