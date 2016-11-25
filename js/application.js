//When the document is ready
$(document).ready(function() {
  //create a new game
  deck = new Deck()
  game = new Game(deck)
  // startBoard()
  //until the game over return true, loop
  // while(game.gameOver() == false){
  	//listen for mouse clicks
  	listeners()
  	//check if gameover equals true
  	// game.gameOver()
  // }
});

// function startBoard(){
  var elements = document.getElementsByClassName('spot');
//  	console.log(elements)

//   // for(i=0;i<elements.length; i++){
//   //      if(game.board[i] == 0){
//   //         $(elements[i]).css('background-color', 'tan')  
//   //         $(elements[i]).append('<h1 style="color: tan;">' + game.board[i]+ '</h1>')
//   //      }else if(game.board[i] == 2){
//   //         $(elements[i]).css('background-color', 'green')
//   //         $(elements[i]).append('<h1 style="color: white;">' + game.board[i]+ '</h1>')
//   //      }else{
//   //         $(elements[i]).css('background-color', 'blue')
//   //         $(elements[i]).append('<h1 style="color: white;">' + game.board[i]+ '</h1>')
//   //      }
//   // }
// }

//mouse click listerns
function listeners(){
  var elements = document.getElementsByClassName('mark');

	//on mouse down on deal back, deal new card
	$('.discard-pile').mousedown(function(){
		count  = game.deal[1].length 
		game.cardDeal(3)
		if(elements[1].innerHTML == game.deal[1][game.deal[0].length]){
			elements[0].innerHTML = "EMPTY"
			
		}else if(elements[1].innerHTML != 'undefined' && elements[1].innerHTML != 'EMPTY'){
			elements[1].innerHTML =  game.deal[1][count + 2]
			if(elements[1].innerHTML == 'undefined'){
				elements[1].innerHTML = game.deal[1][game.deal[0].length]
			}
		}else{
			elements[0].innerHTML = "EMPTY"
		}
})

	//on mouse down on deal card, either move the card to a loction or aces
	$('').mousedown(function(){
		var mousedown = $(this)
		
		$('').mouseup(function(){
			var mouseup = $(this)

				//if mouse down on deal card, and mouse up on location card, then this will move the card
				// if(){
				// 	//game.dealToLocation(num)
				
				// //if mouse down on deal card, and mouse up on ace, will move the card to ace
				// }else if(){

				// 	//game.dealToAce(num)X
				// }else{
				// 	//invaild mouse click
				// }
			})
	})
	
	//on mouse down card on a location, either move those card into another pile or to aces
	$('').mousedown(function(){
		var mousedown = $(this)
		$('').mouseup(function(){
			var mouseup = $(this)

				// //if mouse down on card, and mouse up on location card, then will move a card to a new location
				// if(){
				// 	//game.cardToLocation(num)
				// }
				// //if mouse down on card, and mouse up on ace card, then will move a card to ace pile
				// else if(){

				// 	//game.cardToAce(num)
				// }else{
				// 	//invaild mouse click
				// }
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