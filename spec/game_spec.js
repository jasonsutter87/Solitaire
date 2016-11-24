describe("generates a deck of cards", function() {
  beforeEach(function() {
    deck = new Deck();
  });

  // it should not be empty
  it("should not be empty", function(){
    expect(deck.deck).not.toBeNull();
  });

  // it should have 52 cards
  it("should have 52 cards", function(){
    expect(deck.deck.length).toEqual(52);
  });
 
  // it should be shuffled
  // it("it should come shuffled", function(){
  //    expect(deck.deck).toEqual(52);
  // });


});


describe("generates a deck of cards", function() {
  beforeEach(function() {
    deck = new Deck();
    game = new Game(deck);
  });

  //board setup
  it("should have 4 ace piles", function(){
     expect(game.aces.length).toEqual(4);
  });

  it("should have 7 card piles", function(){
    expect(game.spots.length).toEqual(7);
  });

  it("card pile1 should have 0 cards in queue", function(){
    expect(game.spots[0][1].length).toEqual(0);
  });


  it("card pile2 should have 1 cards in queue", function(){
    expect(game.spots[1][1].length).toEqual(1);
  });


  it("card pile3 should have 2 cards in queue", function(){
    expect(game.spots[2][1].length).toEqual(2);
  });


  it("card pile4 should have 3 cards in queue", function(){
    expect(game.spots[3][1].length).toEqual(3);
  });


  it("card pile5 should have 4 cards in queue", function(){
    expect(game.spots[4][1].length).toEqual(4);
  });

  it("card pile6 should have 5 cards in queue", function(){
    expect(game.spots[5][1].length).toEqual(5);
  });


  it("card pile7 should have 6 cards in queue", function(){
    expect(game.spots[6][1].length).toEqual(6);
  });
 
  // deal should have no cards showing first


  // dealing

  // deal should deal the first 3 cards
  // deal pile went down
  // deal 2x should deal the first 6 cards
  // deal 2x pile went down 2x 


  // moving cards

  // should move card from one location to another card pile
  // should also remove those cards from pile
  // move card from pile into ace pile
  // move king to new empty location
  // move card from ace pile back into the card piles




  // game over

  // if all aces pile sum equals 52














  it("board should not be null", function() {
     // expect(game.board).not.toBeNull();
  });

  // it("board should should have 42 spots", function() {
  //    expect(game.board.length).toEqual(7);
  // });

  // it("board should be fill will all empty strings", function() {
  //    expect(game.board).toEqual(gameBoard);
  // });
});

