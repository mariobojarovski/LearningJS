let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {//object
  retreat() {//funkcija
    console.log(retreatMessage)
  },
  takeOff() {//funkcija
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();