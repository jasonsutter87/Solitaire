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

	  console.log(array)
	  return array;
	}
	shuffle(this.deck)
}
deck = new Deck()






// var Game = function(){
// 	this.deck = Deck.shuffle()
// }



// Game.prototype.dealNewGame = function(){}
// Game.prototype.dealCards = function(dealNum){}
// Game.prototype

//Set up game (Initial deal)
//  => places cards 7 sets (1-7)
//  => rest card place in turn deal group.

//Deal hand (turn deal)
//  => Deal 3
//  => Deal 1


//Last played card
//  => Was the last card played (in the spot, empty, Red or Black?)

//Can be place?
//  => Yes, No


//game over

//place card in pile

//move groups of card from one pile to another [ array1, => array3, or array1-card2-4, => array3 ]


