var fs = require('fs');
var array = fs.readFileSync('inputs/day1.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}