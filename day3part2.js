/**
 * Created by user 60 on 12/14/2015.
 */
//var input = '^>v<';
var fs = require('fs');
var input = fs.readFileSync('inputs/day3.txt').toString();

function Point(x,y){
    this.x=x;
    this.y=y;
}

var santa = new Point(0,0);
var robot = new Point(0,0);
var token = 'santa';

var visited = [];
visited.push(new Point(0,0));

for (var i=0; i<input.length; i++){
    if(i%2===0){
        move(input[i], santa);
        token ='santa';
    }
    else {
        move(input[i], robot);
        token ='robot';
    }
    //console.log(token+"'s turn "+input[i]+input[i]+input[i]);
    //
    //console.log(visited);
    //console.log("________________________________");
}

function move(input, character){
    switch(input){
        case '<':
            character.x--;
            break;
        case '>':
            character.x++;
            break;
        case '^':
            character.y++;
            break;
        case 'v':
            character.y--;
            break;
    }
    var char = new Point(character.x, character.y);

    if(!isInVisited(char)){
        visited.push(char);
    }
}

function isInVisited(character){
    for(var i=0;i<visited.length;i++){
        if(visited[i].x === character.x && visited[i].y === character.y)
            return true;
    }
    return false;
}

console.log(visited.length);