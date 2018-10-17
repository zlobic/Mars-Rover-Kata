var rover ={
  direction: "N",
  x: 5,
  y: 5,
  travelLog: []
}

function boundaryWarning(rover){
  if (rover.y === 0 && rover.direction === "N"){
    console.log("DO NOT ENTER, NIGHTWALKERS AHEAD, YOU CAN NOT CONTINUE                        NORTH");}
    if (rover.y === 9 && rover.direction === "S"){
        console.log("Do not continue south, you are entering a dimension                of SpongeBobs dreams.");}
        if (rover.x === 0 && rover.direction === "W"){
             console.log("DO NOT PROCEED WEST, unknown bacteria ahead");}
            if (rover.x === 9 && rover.direction === "E"){
console.log("EAST - XXX NO MAN'S LAND");}
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
  case "N": rover.direction = "W"
  break;
  case "E": rover.direction = "N"
  break;
  case "S": rover.direction = "E"
  break;
  case "W": rover.direction = "S"
  break;
  };
  console.log("The new direction is " + rover.direction);
  }
  
function turnRight(rover){
    console.log("turnRight was called!");
    switch (rover.direction){
  case "N": rover.direction = "E"
  break;
  case "E": rover.direction = "S"
  break;
  case "S": rover.direction = "W"
  break;
  case "W": rover.direction = "N"
  break;
  };
  console.log("The new direction is " + rover.direction);
  }

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
case "N": rover.y -= 1
break;
case "E": rover.x += 1
break;
case "S": rover.y += 1
break;
case "W": rover.x -= 1
break;
};
console.log("The new position of the rover is " + rover.x + " & " + rover.y);
rover.travelLog.push([rover.x,rover.y]);
boundaryWarning(rover);}


function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction){
case "N": rover.y += 1
break;
case "E": rover.x -= 1
break;
case "S": rover.y -= 1
break;
case "W": rover.x += 1
break;
};
console.log("The new position of the rover is " + rover.x + " & " + rover.y);
rover.travelLog.push(rover.x + rover.y);
boundaryWarning(rover);}

var listOfCommands = "";
function command(listOfCommands){
for (var i = 0; i < listOfCommands.length; i++) {
switch (listOfCommands[i]) {
  case "f":
    moveForward(rover);
    break;
  case "b":
    moveBackward(rover);
    break;
  case "r":
    turnRight(rover);
    break;
  case "l":
    turnLeft(rover);
    break;
    default: console.log("This input command does not exist");
};
}}

console.log(rover.x);
console.log(rover.y);
command("f");
command("f");
command("f");
command("f");
command("f");