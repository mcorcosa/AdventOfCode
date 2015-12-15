var fs = require('fs');
var array = fs.readFileSync('inputs/day7.txt').toString().split(";");

//split each expressions into atoms and reverse them, so the output is the first element of the array
for(i in array) {
    array[i] = array[i].split(' ');
    array[i] = array[i].reverse();
    array[i].result = array[i][0];
    array[i].operation = array[i][3];
    array[i].operand1 = array[i][2];
    if(!isNaN(array[i].operand1))
        array[i].operand1=parseInt(array[i].operand1)
    array[i].operand2 = array[i][4];
    if(!isNaN(array[i].operand2))
        array[i].operand2=parseInt(array[i].operand2)

    for(var j=0;j<5;j++)
        array[i].splice(0,5);
}

function evalWire(wire){

}