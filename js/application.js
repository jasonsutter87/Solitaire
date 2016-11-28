//When the document is ready
$(document).ready(function() {
  //create a new game

  deck = new Deck()
  game = new Game(deck)

 	console.log("Spot 6 =-.-=" + game.spots[6][1]);
 	console.log("Spot 5 =-.-=" + game.spots[5][1]);
 	console.log("Spot 4 =-.-=" + game.spots[4][1]);
 	console.log("Spot 3 =-.-=" + game.spots[3][1]);
 	console.log("Spot 2 =-.-=" + game.spots[2][1]);
 	console.log("Spot 1 =-.-=" + game.spots[1][1]);
 	console.log("Spot 0 =-.-=" + game.spots[0][1]);

  renderBoard()

	drag()

	//listen for mouse clicks
	listeners()

});

function renderBoard(){
  var elements = document.getElementsByClassName('spot');
  //Adding images to element
  elements[0].innerHTML = ("<img class='draggable value' id='"+game.spots[0][0]+"' src='../images/"+game.spots[0][0]+"'>").toString()
 	elements[1].innerHTML = ("<img class='draggable value' id='"+game.spots[1][0]+"' src='../images/"+game.spots[1][0]+"'>").toString()
 	elements[2].innerHTML = ("<img class='draggable value' id='"+game.spots[2][0]+"' src='../images/"+game.spots[2][0]+"'>").toString()
 	elements[3].innerHTML = ("<img class='draggable value' id='"+game.spots[3][0]+"' src='../images/"+game.spots[3][0]+"'>").toString()
 	elements[4].innerHTML = ("<img class='draggable value' id='"+game.spots[4][0]+"' src='../images/"+game.spots[4][0]+"'>").toString()
 	elements[5].innerHTML = ("<img class='draggable value' id='"+game.spots[5][0]+"' src='../images/"+game.spots[5][0]+"'>").toString()
 	elements[6].innerHTML = ("<img class='draggable value' id='"+game.spots[6][0]+"' src='../images/"+game.spots[6][0]+"'>").toString()


 	// Selecting the id to find the aces
 	$( ".value" ).each(function(index, value) {

 		if ($(this).attr('id') == "S1.png" || $(this).attr('id') == "H1.png" || $(this).attr('id') == "C1.png" || $(this).attr('id') == "D1.png"){
 			// saves the spot where the ace left
 			var emptySpot = $(this).parent().attr('id');
 			// console.log(emptySpot.charAt(4))
 			//  send the ace to the top
 			aces($(this), $(this).attr('id'))
 			// replace the emptySpot with the next card
 			elements[(emptySpot.charAt(4))].innerHTML = ("<img class='draggable value' id='"+game.spots[emptySpot.charAt(4)][1]+"' src='../images/"+game.spots[emptySpot.charAt(4)][1][0]+"'>").toString()
 		}
	});
}

// Check which type of ace and place on the right place
function aces(card, id) {
	if (id.charAt(0) == "H") {
		$("#hearts").empty();
		$("#hearts").append(card);
	}else if (id.charAt(0) == "S") {
		$("#spades").empty();
		$("#spades").append(card);
	}else if (id.charAt(0) == "C") {
		$("#clubs").empty();
		$("#clubs").append(card);
	}else if (id.charAt(0) == "D") {
		$("#diamonds").empty();
		$("#diamonds").append(card);
	}
}

	function drag() {
		$(function() {
    	$( ".draggable" ).draggable();
  	});
	}


//mouse click listerns
function listeners(){
  var elements = document.getElementsByClassName('mark');

	//on mouse down on deal back, deal new card
	$('.draw-pile').mousedown(function(){
		count  = game.deal[1].length
		game.cardDeal(3)
		if(elements[1].innerHTML == game.deal[1][game.deal[0].length]){
			elements[0].innerHTML = "EMPTY"

		}else if(elements[1].innerHTML != 'undefined' && elements[1].innerHTML != 'EMPTY'){
			//Adding images to element
			elements[1].innerHTML = ("<img class='draggable look' id='"+game.deal[1][count]+"' src='../images/"+game.deal[1][count]+"'>").toString()
			elements[2].innerHTML = ("<img class='draggable look' id='"+game.deal[1][count +1]+"' src='../images/"+game.deal[1][count + 1]+"'>").toString()
			elements[3].innerHTML = ("<img class='draggable look' id='"+game.deal[1][count + 2]+"' src='../images/"+game.deal[1][count + 2]+"'>").toString()
			drag()
			if(elements[1].innerHTML == 'undefined'){
				elements[1].innerHTML = game.deal[1][game.deal[0].length]
			}
		}else{
			elements[0].innerHTML = "EMPTY"
		}

		// Selecting the id to find the aces
		$( ".look" ).each(function(index, value) {
 				if ($(this).attr('id') == "S1.png" || $(this).attr('id') == "H1.png" || $(this).attr('id') == "C1.png" || $(this).attr('id') == "D1.png"){
 					aces($(this), $(this).attr('id'))
 				}
			});
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
