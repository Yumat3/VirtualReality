/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let ufos = [], maze = [
  "xx-xxxxxxxxx--xxxxxxx",
  "--x-x--t--------------",
  "xx-xx-x--xxxxxxxx--xxx",
  "x-------xxoxxo-----xxx",
  "xx-x-xxxxx-xxxxxxxxxxx",
  "xx-x-x-x-------------t",
  "x-tx-o-x-xxoxxx-xxxxxx",
  "x-xx-x-x-x--------txox",
  "x------x-t-x-x--xxxx-x",
  "xx-xtx---x---xx------x",
  "-t---xttxx-xx---xxx--x",
  "xxxxxoxxoxxtxxxxxxx--x",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  car = document.getElementById("cyber");
  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characterdss you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Car(c*6,1,r*2);
      }
      else if(cols[c] == "t"){
        let ufo = new UFO(c*6,10,r*2);
        ufos.push(ufo);
      }else if(cols[c]=="o"){
        new Rock(c*6,1,r*2);
      }
    }
  }
  loop();
})
function loop(){
  for(let ufo of ufos){
    ufo.invade();
  }
  window.requestAnimationFrame( loop );
}