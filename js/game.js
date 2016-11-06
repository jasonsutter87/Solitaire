var Deck = function(){
	this.deck = []	
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 13; j++){
			if(i == 0){
				this.deck.push("D"+(j + 1).toString())
			}
			else if(i == 1){
				this.deck.push("S"+(j + 1).toString())
			}
			else if(i == 2){
				this.deck.push("H"+(j + 1).toString())
			}
			else{
				this.deck.push("C"+(j + 1).toString())
			}
		}
	}

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}
	shuffle(this.deck)
}

var Game = function(cards){
	this.deck = cards
	this.aces = [[],[],[],[]]
	this.spots = [[],[],[],[],[],[],[]]
	this.deal = [[],[]]
	
	//Deal Spots
	for(var i = 0; i < 1; i++){
		this.spots[0].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	for(var i = 0; i < 2; i++){
		this.spots[1].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	for(var i = 0; i < 3; i++){
		this.spots[2].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	for(var i = 0; i < 4; i++){
		this.spots[3].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	for(var i = 0; i < 5; i++){
		this.spots[4].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	for(var i = 0; i < 6; i++){
		this.spots[5].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	for(var i = 0; i < 7; i++){
		this.spots[6].push(this.deck.deck[0])
		this.deck.deck.shift()
	}

	this.deal[0] = this.deck.deck
}

Game.prototype.moveCards = function(fromX, fromY, newSpotIndex) {
	var cardX = fromX 
	var cardY = fromY 
	var cardIndex = newSpotIndex
	var tempGroup = []


	//Moves single card over
	// console.log("Moving cards")
	// this.spots[cardIndex].push(this.spots[cardX][cardY])
	// this.spots[cardX].shift()


	//Moves single card over
	console.log("Moving cards 2.0")
	// console.log(this.spots[cardX][cardY])
	// console.log(this.spots[newSpotIndex])










	//checks the cards from the one picked until the end.
	// moved the one picked until the end into a temportory array
	//delete the one picked item column in the array until the end.
	//moved the first card  item column in the array until the end into the coulm picked.




	// this.spots[cardIndex].push(this.spots[cardX][cardY])
	// this.spots[cardX].shift()

	
	
	console.log(this.spots)
}



Game.prototype.canPlaced = function(cardA, cardB){
// TODO: Kings can only be placed on empty arrays
	var topCard = cardA
	var placingCard = cardB

	var suitA = topCard.split('', 1)[0]
	var suitB = placingCard.split('', 1)[0]

	if(topCard.length == 2){
		var valueA = topCard.slice(-1)
	}else{
		var valueA = topCard.slice(-2)
	}

	if(placingCard.length == 2){
		var valueB = placingCard.slice(-1)
	}else{
		var valueB = placingCard.slice(-2)
	}

	if(suitA != suitB){
		if(suitA == "H" && suitB != "D"){
			if(valueA - 1 == valueB){
				console.log("VALID MOVE")
				return true
			}
		}
		if(suitA == "D" && suitB != "H"){
			if(valueA - 1 == valueB){
				console.log("VALID MOVE")
				return true
			}
		}
		if(suitA == "S" && suitB != "C"){
			if(valueA - 1 == valueB){
				console.log("VALID MOVE")
				return true
			}
		}
		if(suitA == "C" && suitB != "S"){
			if(valueA - 1 == valueB){
				console.log("VALID MOVE")
				return true
			}
		}else{
			console.log("NOT A VALID MOVE")
			return false
		}
	} else{
		console.log("NOT A VALID MOVE")
		return false
	}
}



// ++++++++++++ DRIVER CODE ++++++++++++
deck = new Deck()
game = new Game(deck)


game.canPlaced("H13", "D2")








//Set up game (Initial deal)
//  => places cards 7 sets (1-7)
//  => rest card place in turn deal group.

//Deal hand (turn deal)
//  => Deal 3
//  => Deal 1


//Last played card
//  => Was the last card played (in the spot, empty, Red or Black?)




//game over

//place card in pile

//move groups of card from one pile to another [ array1, => array3, or array1-card2-4, => array3 ]


