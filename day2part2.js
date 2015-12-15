/**
 * Created by Penchium on 14.12.2015.
 */
var fs = require('fs');
var input = fs.readFileSync('inputs/day2.txt').toString();
var boxes = input.split('\n');

var totalRibbonLength = 0;

for(var i =0; i<boxes.length; i++){
    var sizes = boxes[i].split('x');
    var w = sizes[0];
    var h = sizes[1];
    var l = sizes[2];
    var ribbonLength = getSmallestPerimeter(w,h,l)+w*h*l;
    totalRibbonLength += ribbonLength;
}

function getSmallestPerimeter(w,h,l){
    return Math.min(w*2+h*2, Math.min(w*2+l*2, h*2+l*2))
}

console.log(totalRibbonLength);