const cards = ['diamond', 'spade', 'heart', 'club'];//niza
let currentCard;
while ( currentCard != 'spade') {//vrti se dodeka currentCard e ednakvo na spade
  currentCard = cards[Math.floor(Math.random() * 4)];// se zema nekoja random vrednost megju 1 -4 i zamenuva za indeksot a izata
	console.log(currentCard);
}
