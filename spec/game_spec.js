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
  it("it should come shuffled", function(){
     expect().toEqual();
    pending();
  });


});

//board setup
describe("Sets up game board", function() {
  beforeEach(function() {
    deck = new Deck();
    game = new Game(deck);
  });

  
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
 
  it("deal should have no cards showing first", function(){
    expect(game.deal[1].length).toEqual(0);
  });
});

 // dealing
describe("Dealing", function() {
  beforeEach(function() {
    deck = new Deck();
    game = new Game(deck);
  });
 
  it("deal should deal the first 3 cards", function(){
    game.cardDeal(3)
    expect(game.deal[1].length).toEqual(3);
  });

  it("deal pile went down", function(){
    game.cardDeal(3)
    expect(game.deal[0].length).toEqual(21);
  });
  
  it("deal 2x should deal the first 6 cards", function(){
    game.cardDeal(3)
    game.cardDeal(3)
    expect(game.deal[0].length).toEqual(18);
  });

  it("deal 2x pile went down 2x ", function(){
    game.cardDeal(6)
    expect(game.deal[1].length).toEqual(6);
  });

});

// moving cards
describe("Moving Cards", function() {
  beforeEach(function() {
    deck = new Deck();
    game = new Game(deck);
  });

  it("should move card from one location to another card pile", function(){
    expect().toEqual();
    pending();
  });

  it("should also remove those cards from pile", function(){
    expect().toEqual();
    pending();
  });

  it("move card from pile into ace pile", function(){
    expect().toEqual();
    pending();
  });

  it("move king to new empty location", function(){
    expect().toEqual();
    pending();
  });

  it("move card from ace pile back into the card piles", function(){
    expect().toEqual();
    pending();
  });

});


describe("Game Over or Win", function() {
  beforeEach(function() {
    deck = new Deck();
    game = new Game(deck);
    game.aces[0].push('S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13')
    game.aces[1].push('C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13')
    game.aces[2].push('D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13')
    game.aces[3].push('H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13')
    game.deal = [[],[]]
    game.spots = [[],[],[],[],[],[],[]]

  });
  
  it("if all aces pile sum equals 52", function(){
    expect((game.aces[0].length) + (game.aces[1].length) + (game.aces[2].length) + (game.aces[3].length)).toEqual(52);
  });

  it("if there are no more cards in the deal pile", function(){
    expect(game.deal[0].length).toEqual(0);
  });

  it("if all spots are empty", function(){
    expect(game.spots[0].length).toEqual(0);
    expect(game.spots[1].length).toEqual(0);
    expect(game.spots[2].length).toEqual(0);
    expect(game.spots[3].length).toEqual(0);
    expect(game.spots[4].length).toEqual(0);
    expect(game.spots[5].length).toEqual(0);
    expect(game.spots[6].length).toEqual(0);
  });

});