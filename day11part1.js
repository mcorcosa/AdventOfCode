var oldPassword = 'hxbxxyzz';
var array = oldPassword.split('');
var isValid = false;

function increment(string, index){
  var i = index;
  var char = string[i];
    if(string[i]==='z'){
      string[i]='a';
      increment(string, i-1);
    }
    else{
      if(String.fromCharCode(char.charCodeAt() + 1)==='i' || String.fromCharCode(char.charCodeAt() + 1)==='o' ||String.fromCharCode(char.charCodeAt() + 1)==='l')
        string[i]=String.fromCharCode(char.charCodeAt() + 2);
      else
        string[i]=String.fromCharCode(char.charCodeAt() + 1);
    }
}

function checkForConditions(array){
  if(isCleanOfIOL(array) && hasThreeStraight(array) && hasTwoPairs(array))
    return true;
  else
    return false;
}

function hasThreeStraight(array){
  for (var i=0; i<array.length-2; i++) {
      if(array[i]===String.fromCharCode(array[i+1].charCodeAt() - 1) && array[i]===String.fromCharCode(array[i+2].charCodeAt()-2))
          return true;
  }
  return false;
}

function hasTwoPairs(array){
  var doubles = [];
  for (var i=0; i<array.length-1; i++) {
      if(array[i]===array[i+1]){
        i++;
        doubles.push(array[i]);
        if(doubles.length === 2)
          return true;
      }
  }
  return false;
}

function isCleanOfIOL(array){
  var badStrings=["i", "o", "l"];
  for(var i=0; i<badStrings.length; i++){
      if(array.indexOf(badStrings[i])>=0) {
          // increment(array, array.indexOf(badStrings[i]));
          return false;
      }
  }
  return true;
}

console.log("Initial password: "+oldPassword);
while(!isValid){
  increment(array, oldPassword.length-1);
  isValid = checkForConditions(array);
  console.log("New password: "+array.join());
  if(isValid)
    console.log("IS VALID");
}
