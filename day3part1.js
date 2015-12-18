/**
 * Created by Penchium on 14.12.2015.
 */
var fs = require('fs');
var input = fs.readFileSync('inputs/day3.txt').toString();
var x=0;
var y=0;
function Point(x, y){
    this.x = x;
    this.y = y;
}

//initial point
var point = new Point(x,y);
var visitedPoints = [point];
console.log(input.length);

for (var i=0;i<input.length;i++){
    console.log(input[i]);
    switch (input[i]){
        case '>':
            x++;
            break;
        case '<':
            x--;
            break;
        case '^':
            y++;
            break;
        case 'v':
            y--;
            break;
    }
    var newPoint = new Point(x,y);
    if(!isInVisited(newPoint)) {
        visitedPoints.push(newPoint);
        console.log("NEW HOUSE!");
    }
    else{
        console.log("ALREADY VISITED!");
    }
}

console.log(visitedPoints.length);

//checks if a point was already visited
function isInVisited(point){
    for (var i=0;i<visitedPoints.length;i++) {
        if(visitedPoints[i].x===point.x&&visitedPoints[i].y===point.y){
            return true;
        }

    }
    return false;

}
