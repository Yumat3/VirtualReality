let maze = [
  "----xxxxxxxxx--xxxxxxx",
  "----x--t--------------",
  "-xxxx-x--xxxxxxxx--xxx",
  "-x------xxoxxo-----xxx",
  "-x-x-xxxxx-xxxxxxxxxxx",
  "-x-x-x-x-------------t",
  "-xtx-o-x-xxoxxx-xxxxxx",
  "-xxx-x-x-x--------txox",
  "-x-----x-t-x-x--xxxx-x",
  "-x-xtx---x---x-------x",
  "-xxxxxxxxxxxxxxxxxx--x",
  "------------------x--x",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "t"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})