var fs = require('fs');
var input = fs.readFileSync('inputs/day5.txt').toString();
inputArray = input.split('\n');
var niceCounter = 0;

function checkStrings() {
    for (var i = 0; i < inputArray.length; i++) {
        var string = inputArray[i];
        console.log(string);
        console.log('vowels: ' + checkForVowels(string));
        console.log('doubles: ' + checkForDoubleLetter(string));
        console.log('no bads: ' + isClearOfBadStrings(string));
        if (checkForVowels(string) && checkForDoubleLetter(string) && isClearOfBadStrings(string))
            niceCounter++;
        console.log(niceCounter);
        console.log('-------------');
    }
    return niceCounter;
}

function checkForVowels(string){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsCount = [];
    for (var i=0; i<string.length; i++) {
        if(vowels.indexOf(string[i])>=0) {
            vowelsCount.push(string[i]);
            if(vowelsCount.length === 3) {
                return true;
            }
        }
    }
    return false;
}

function checkForDoubleLetter(string){
    for (var i=0; i<string.length-1; i++) {
        if(string[i]===string[i+1])
            return true;
    }
    return false;
}

function isClearOfBadStrings(string){
    var badStrings=["ab", "cd", "pq", "xy"];
    for(var i=0; i<badStrings.length; i++){
        if(string.indexOf(badStrings[i])>=0) {
            console.log(badStrings[i]+" at index "+string.indexOf(badStrings[i]>=0))
            return false;
        }
    }
    return true;
}

console.log(checkStrings()+' total nice strings');