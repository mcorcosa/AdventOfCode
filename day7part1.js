/**
 * Created by user 60 on 12/17/2015.
 */
var fs = require('fs');
var array = fs.readFileSync('inputs/day7.txt').toString().split(";");

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
    //console.log(wire);
    switch (wire.gate){
        case null:
            if(!isNaN(wire.source1)){
                wire.signal = wire.source1;
            }
            else{
                var source = findByIdentifier(wire.source1);
                if(isNaN(source.signal) || source.signal === null){
                    evalWire(findByIdentifier(source.identifier));
                    wire.signal = source.signal;
                }
                else{
                    wire.signal = source.signal;
                }
            }

            console.log(wire.identifier+"->AFTER: "+wire.signal);
            break;

        case 'NOT':
            if(!isNaN(wire.source1)){
                wire.signal = 65536+(~ wire.source1);
            }
            else{
                var source = findByIdentifier(wire.source1);
                if(isNaN(source.signal) || source.signal === null){
                    evalWire(findByIdentifier(source.identifier));
                    wire.signal = 65536+(~ source.signal);
                }
                else{
                    wire.signal = 65536+(~ source.signal);
                }
            }

            console.log(wire.identifier+"->AFTER: "+wire.signal);
            break;

        case 'AND':
            if(!isNaN(wire.source1) && !isNaN(wire.source2)){
                wire.signal = wire.source1 & wire.source2;
            }
            else if(isNaN(wire.source1) && !isNaN(wire.source2)){
                var source1 = findByIdentifier(wire.source1);
                evalWire(findByIdentifier(wire.source1));
                wire.signal = source1.signal & wire.source2;
            }
            else if(!isNaN(wire.source1) && isNaN(wire.source2)){
                var source2 = findByIdentifier(wire.source1);
                evalWire(findByIdentifier(wire.source2));
                wire.signal = wire.source1 & source2.signal;
            }
            else if(isNaN(wire.source1) && isNaN(wire.source2)){
                var source1 = findByIdentifier(wire.source1);
                var source2 = findByIdentifier(wire.source2);
                evalWire(findByIdentifier(wire.source1));
                evalWire(findByIdentifier(wire.source2));
                wire.signal = source1.signal & source2.signal;
            }
            console.log(wire.identifier+"->AFTER: "+wire.signal);
            break;

        case 'OR':
            if(!isNaN(wire.source1) && !isNaN(wire.source2)){
                wire.signal = wire.source1 | wire.source2;
            }
            else if(isNaN(wire.source1) && !isNaN(wire.source2)){
                var source1 = findByIdentifier(wire.source1);
                evalWire(findByIdentifier(wire.source1));
                wire.signal = source1.signal | wire.source2;
            }
            else if(!isNaN(wire.source1) && isNaN(wire.source2)){
                var source2 = findByIdentifier(wire.source1);
                evalWire(findByIdentifier(wire.source2));
                wire.signal = wire.source1 | source2.signal;
            }
            else if(isNaN(wire.source1) && isNaN(wire.source2)){
                var source1 = findByIdentifier(wire.source1);
                var source2 = findByIdentifier(wire.source2);
                evalWire(findByIdentifier(wire.source1));
                evalWire(findByIdentifier(wire.source2));
                wire.signal = source1.signal | source2.signal;
            }
            console.log(wire.identifier+"->AFTER: "+wire.signal);
            break;

        case 'LSHIFT':
            if(!isNaN(wire.source2)){
                wire.signal = wire.source2 << wire.source1;
            }
            else{
                var source = findByIdentifier(wire.source2);
                if(isNaN(source.signal) || source.signal === null){
                    evalWire(findByIdentifier(source.identifier));
                    wire.signal = source.signal << wire.source1;
                }
                else{
                    wire.signal = source.signal << wire.source1;
                }
            }

            console.log(wire.identifier+"->AFTER: "+wire.signal);
            break;

        case 'RSHIFT':
            if(!isNaN(wire.source2)){
                wire.signal = wire.source2 >> wire.source1;
            }
            else{
                var source = findByIdentifier(wire.source2);
                if(isNaN(source.signal) || source.signal === null){
                    evalWire(findByIdentifier(source.identifier));
                    wire.signal = source.signal >> wire.source1;
                }
                else{
                    wire.signal = source.signal >> wire.source1;
                }
            }

            console.log(wire.identifier+"->AFTER: "+wire.signal);
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

evalWire(findByIdentifier('a'));
