var _ = require('lodash');
var fs = require('fs');
var array = fs.readFileSync('inputs/day9.txt').toString().split('\r\n');
var nodes = [];
var roads = [];

array = array.splice(0, array.length-1);

function serializeData(){
  for(var i=0; i<array.length ;i++){
    var data = array[i].split(' ');
    //console.log(data);
    var road = {};
    road.distance = parseInt(data[4]);
    road.node1 = data[0];
    road.node2 = data[2];
    roads.push(road);
    var node = data[0];
    node.visited=false;
    if(_.indexOf(nodes, node)<0){
      nodes.push(node);
    }
  }
}

function findShortestRoad(startingNode){
  var visitedNodes = [];
  visitedNodes.push(startingNode);

}

function generateSolutions(){
  //find shortest road for each starting node
  for(var i in nodes){
    findShortestRoad(nodes[i]);
  }
}

serializeData();
generateSolutions();

// console.log(nodes);
// console.log(roads);
