

var gameState = 0;
var contestantCount = 0;
var allContestants ;
var database;
var  question , answer , quiz ;
var contestant;


function setup(){
  createCanvas (860, 600)
  database = firebase.database()
  quiz = new Quiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");
  if(contestantCount==4){
   quiz.update(1)
  }
  
  if(gameState==1){
   clear()
   quiz.play()
  }

  
}
