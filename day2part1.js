var fs = require('fs');
var input = fs.readFileSync('inputs/day2.txt').toString();
var boxes = input.split('\n');
var totalArea = 0;

for(var i =0; i<boxes.length; i++){
    var sizes = boxes[i].split('x');
    var w = sizes[0];
    var h = sizes[1];
    var l = sizes[2];
    var boxArea = 2*l*w + 2*w*h + 2*h*l +getSmallest(w,h,l);
    totalArea += boxArea;
}

function getSmallest(w,h,l){
    return Math.min(w*h, Math.min(w*l, h*l))
}

console.log(totalArea)