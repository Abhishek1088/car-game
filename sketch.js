var ball;
var database,position
var gamestate = 0,playercount,form,player,game

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game = new Game()
    game.getState()
    game.start()
}


function draw(){
    background("white");
    
}
