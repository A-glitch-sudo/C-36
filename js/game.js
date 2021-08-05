class Game {
constructor(){
    
}

getState(){ // read the game state from the database
  var gameStateRef = database.ref('gameState')
  gameStateRef.on("value",function(data){
      gameState = data.val();
  })
}

update(state){ // update the gamestate in the database to a value passed in parentheses ().
   database.ref('/').update({
       gameState:state     
   })
}

start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
}