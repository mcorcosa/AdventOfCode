var fs = require('fs');
var input = fs.readFileSync('inputs/day5.txt').toString();
inputArray = input.split('\n');
var niceCounter = 0;

function checkStrings() {
    for (var i = 0; i < inputArray.length; i++) {
        var string = inputArray[i];
        console.log(string);
        console.log('doubles: ' + checkForDoublePairs(string));
        console.log('repeat step: ' + hasRepeatStep(string));
        if (checkForDoublePairs(string) && hasRepeatStep(string))
            niceCounter++;
        console.log(niceCounter);
        console.log('-------------');
    }
    return niceCounter;
}

function checkForDoublePairs(string){
    var doubles = [];
    for (var i=0; i<string.length-1; i++) {
        for (var j=i+2; j<string.length-1; j++){
            if(string[i] === string [j] && string[i+1] === string [j+1]){
                return true
            }
        }
    }
    return false;
}

function hasRepeatStep(string){
    for (var i=0; i<string.length-1; i++) {
        if(string[i]===string[i+2])
            return true;
    }
    return false;
}

console.log(checkStrings()+' total nice strings');
