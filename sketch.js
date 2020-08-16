var hypnoticBall, database;
var position;
var canvas,backgroundImg;
var gameState=0;
var form,player,game;
var playerCount;


function setup(){
canvas=createCanvas(400,400)
database=firebase.database();
game=new Game();
game.getState();
game.start();

}

function draw(){
 

    
  
}


