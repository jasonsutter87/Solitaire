//Creates a new deck of cards and shuffles them
var Deck = function(){
	this.deck = []
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 13; j++){
			if(i == 0){
				this.deck.push("D"+(j + 1).toString()+".png")
			}
			else if(i == 1){
				this.deck.push("S"+(j + 1).toString()+".png")
			}
			else if(i == 2){
				this.deck.push("H"+(j + 1).toString()+".png")
			}
			else{
				this.deck.push("C"+(j + 1).toString()+".png")
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

//creates a new game of solitare, and deals the first hand
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

//Move card function that will grab a pile of cards and move them
Game.prototype.moveCardsPile = function(column, spot, newSpotIndex) {
	//pushes cards from one array to another
	for(var i = 0; i < this.spots[column][spot].slice(spot,52).length; i++){
		var temp = this.spots[column][spot].slice(spot,52)[i]
		this.spots[newSpotIndex][0].push(temp)
	}
	//removed old pile from array
	for(var i = 0; i < this.spots[column][spot].slice(spot,52).length; i++){
		var temp = this.spots[column][spot].slice(spot,52)[i]
		var index = this.spots[column][0].indexOf(temp);

		if(index != -1){
		    this.spots[column].splice( index, 1 );
		}
	}
}

//Move a card from the current deal card into a new spot ----> TODO
Game.prototype.moveCardDeal = function(newSpotIndex){}

// Move a card from an ace pile into a new spot ----> TODO
Game.prototype.moveCardAces = function(aceSpot, newSpotIndex){}

//Return either true or false for valid moves
Game.prototype.vaildMove = function(cardA, cardB, column){
	var playerPos = column - 1
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

	//Checks for Kings in a empty location
	if((this.spots[playerPos][0].length == 0 && this.spots[playerPos][1].length == 0) &&  valueB  == 13 && valueA == 0 ){
		console.log("VALID MOVE")
		return true
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

//deal 1, 2 or 3 cards
Game.prototype.cardDeal = function(num){
	var hand = []
	while(hand.length <= num - 1){
		hand.push(game.deal[0][0])
		this.deal[1].push(game.deal[0][0])
		game.deal[0].shift()
	}
}

//renders the board
Game.prototype.renderBoard = function(){
	console.log(game.spots)
	console.log(game.aces)
	console.log( "Discard Stack: " + game.deal[1].length+ ", Current Deal Card: " + game.deal[1].slice(-1)[0]+ ", Deal Stack: " + game.deal[0].length)
}

//This will grab the cards value if you give it a position and a spot location. for example: (1,0)
Game.prototype.getCardValue = function(column, spot){
	//show retutn a card value "D1", "H7"
	if(this.spots[column][spot] != undefined){
		console.log(this.spots[column][spot][0])
		return this.spots[column][spot][0]
	}
}

//Checks to see if the game is over
Game.prototype.gameOver = function(){
	if(this.aces[0].length + this.aces[1].length + this.aces[2].length + this.aces[3].length == 52){
		console.log("GAME OVER")
		alert("GAME OVER")
		return true
	}
}


deck = new Deck()
game = new Game(deck)
