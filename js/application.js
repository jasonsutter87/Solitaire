//When the document is ready
$(document).ready(function() {
  //create a new game
  game = new Game()
  
  //until the game over return true, loop
  while(game.gameOver() == false){
  	//listen for mouse clicks
  	listeners()
  	//check if gameover equals true
  	game.gameOver()
  }
});


//mouse click listerns
function listeners(){
	//on mouse down on deal back, deal new card
	$('').mousedown(function(){
		// game.cardDeal(3)
	})

	//on mouse down on deal card, either move the card to a loction or aces
	$('').mousedown(function(){
		var mousedown = $(this)
		
		$('').mouseup(function(){
			var mouseup = $(this)

				//if mouse down on deal card, and mouse up on location card, then this will move the card
				if(){
					//game.dealToLocation(num)
				
				//if mouse down on deal card, and mouse up on ace, will move the card to ace
				}else if(){

					//game.dealToAce(num)X
				}else{
					//invaild mouse click
				}
			})
	})
	
	//on mouse down card on a location, either move those card into another pile or to aces
	$('').mousedown(function(){
		var mousedown = $(this)
		$('').mouseup(function(){
			var mouseup = $(this)

				//if mouse down on card, and mouse up on location card, then will move a card to a new location
				if(){
					//game.cardToLocation(num)
				}
				//if mouse down on card, and mouse up on ace card, then will move a card to ace pile
				else if(){

					//game.cardToAce(num)
				}else{
					//invaild mouse click
				}
			})
	})

	//on mouse down card on aces, move that card back to a location
	$('').mousedown(function(){
		//game.aceToLocation(num, card)
	})
}


// update board
function updateBoard(){}


// initialize window and document 
function init(){
  window.addEventListener("mouse clicks", listeners, false);
}

//add eventlisteners to load
window.addEventListener('load', init, false);