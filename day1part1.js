/**
 * Created by Penchium on 14.12.2015.
 */
var fs = require('fs');
var input = fs.readFileSync('inputs/day1.txt').toString();

var level =0;
for(var i =0; i<input.length; i++){
    if(input[i]==='(')
        level++;
    else
        level--;
}

console.log(level);