var fs = require('fs');
var array = fs.readFileSync('inputs/day7dummy.txt').toString().split(";");

function serializeData(){
    //split each expressions into atoms and make a wire object
    for(i in array) {
        array[i] = array[i].split(' ');
        array[i] = array[i].reverse();

        array[i].identifier = array[i][0];
        array[i].gate = array[i][3];
        array[i].source1 = array[i][2];
        array[i].signal = null;
        if(!isNaN(array[i].source1))
            array[i].source1 = parseInt(array[i].source1);
        array[i].source2 = array[i][4];
        if(!isNaN(array[i].source2))
            array[i].source2 = parseInt(array[i].source2);

        for(var j=0;j<5;j++)
            array[i].splice(0,5);

        //change undefined values to null
        for(var key in array[i]){
            if (typeof array[i][key] == 'undefined') {
                array[i][key] = null;
            }
        }
    }
}

function evalWire(wire){
   console.log(wire);
    switch (wire.gate){
        case null:
            console.log("BEFORE: "+wire.signal);
            //find
            var source = findByIdentifier(wire.source1);
            if(typeof source.signal )
            wire.signal = evalWire(source);
            console.log("AFTER: "+wire.signal);
            break;
    }
}

function findByIdentifier(identifier){
    for(i in array) {
        if(array[i].identifier===identifier)
            return array[i];
    }
}

serializeData();
for(i in array) {
evalWire(array[i])}
//console.log(array);