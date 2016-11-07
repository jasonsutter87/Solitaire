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
	this.spots = [[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]],[[],[]]]
	this.deal = [[],[]]
	
	//Deal Spots
	this.spots[0][0].push(this.deck.deck[0])
	this.deck.deck.shift()
	this.spots[1][0].push(this.deck.deck[0])
	this.deck.deck.shift()
	for(var i = 0; i < 1; i++){
		this.spots[1][1].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	this.spots[2][0].push(this.deck.deck[0])
	this.deck.deck.shift()
	for(var i = 0; i < 2; i++){
		this.spots[2][1].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	this.spots[3][0].push(this.deck.deck[0])
	this.deck.deck.shift()
	for(var i = 0; i < 3; i++){
		this.spots[3][1].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	this.spots[4][0].push(this.deck.deck[0])
	this.deck.deck.shift()
	for(var i = 0; i < 4; i++){
		this.spots[4][1].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	this.spots[5][0].push(this.deck.deck[0])
	this.deck.deck.shift()
	for(var i = 0; i < 5; i++){
		this.spots[5][1].push(this.deck.deck[0])
		this.deck.deck.shift()
	}
	this.spots[6][0].push(this.deck.deck[0])
	this.deck.deck.shift()
	for(var i = 0; i < 6; i++){
		this.spots[6][1].push(this.deck.deck[0])
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
	//Returns either true or false
}

Game.prototype.cardDeal = function(num){
	var hand = []
	while(hand.length <= num - 1){
		hand.push(game.deal[0][0])
		this.deal[1].push(game.deal[0][0])
		game.deal[0].shift()
	}
	

	// console.log(this.deal[1].splice(this.deal[1].length - 1))


	if(num == 3){
		console.log("Deal " + hand[num - 1] + ' .... ' + hand[num - 2], hand[num - 3])
	}else if(num == 2){
		console.log("Deal " + hand[num - 1] + ' .... ' + hand[num - 2])
	}else{
		console.log("Deal " + hand[num - 1])
	}
	
}





Game.prototype.renderBoard = function(){
	console.log(game.spots)
	console.log(game.aces)
}



// ++++++++++++ DRIVER CODE ++++++++++++
deck = new Deck()
game = new Game(deck)

// console.log(game)
game.canPlaced('C6', 'D5')
game.cardDeal(3)
game.renderBoard()


