//jshint

var _ = require('lodash');
var fs = require('fs');
var input = JSON.parse(fs.readFileSync('inputs/day12.txt'));
var sum = 0;

function evalObject(object){
  if(typeof object === 'number'){
    sum += object;
  }
  else if (typeof object === 'object'){
    if(!_.isArray(object)){
      for (var property in object){
        evalObject(property);
        console.log("...");
      }
    }
  }
}

evalObject(input);
