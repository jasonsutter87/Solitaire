//When the document is ready
$(document).ready(function() {
  //create a new game
  deck = new Deck()
  game = new Game(deck)
  renderBoard()

	//listen for mouse clicks
	listeners()

});

function renderBoard(){
	console.log(game.spots);
  var elements = document.getElementsByClassName('spot');
  elements[0].innerHTML = ("<img src='../images/spades/"+game.spots[0][0]+"'>").toString()
 	elements[1].innerHTML = ("<img src='../images/spades/"+game.spots[1][0]+"'>").toString()
 	elements[2].innerHTML = ("<img src='../images/spades/"+game.spots[2][0]+"'>").toString()
 	elements[3].innerHTML = ("<img src='../images/spades/"+game.spots[3][0]+"'>").toString()
 	elements[4].innerHTML = ("<img src='../images/spades/"+game.spots[4][0]+"'>").toString()
 	elements[5].innerHTML = ("<img src='../images/spades/"+game.spots[5][0]+"'>").toString()
 	elements[6].innerHTML = ("<img src='../images/spades/"+game.spots[6][0]+"'>").toString()
}

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
