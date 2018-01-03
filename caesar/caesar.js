const caesar = function(phrase, shift) {
  let shiftedPhrase = phrase;
  if (shift > -1) {
    while(shift > 0){
      shiftedPhrase = shiftForwardOnce(shiftedPhrase);
      shift--;
    }
  } else if (shift < 0) {
      while (shift < 0){
        shiftedPhrase = shiftBackwardOnce(shiftedPhrase);
        shift++;
      }
  }
  return shiftedPhrase;
}



module.exports = caesar

function nextLetter(x) {
  return String.fromCharCode(x.charCodeAt(0)+1);
}

function prevLetter(x) {
  return String.fromCharCode(x.charCodeAt(0)-1);
}

function forwardShifter(x) {
  if (x == "z") {
    return "a";
  } else if (x == "Z") {
    return "A";
  } else {
    return nextLetter(x);
  }
}

function backwardsShifter(x) {
  if (x == "a") {
    return "z";
  } else if (x == "A") {
    return "Z";
  } else {
    return prevLetter(x);
  }
}

function isLetter(x) {
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  if (letters.indexOf(x) > -1) {
    return true;
  } else {
    return false;
  }
}

function shiftForwardOnce(phrase) {
  let newPhrase = phrase.split('');
  for(i=0;i<newPhrase.length;i++){
    if (isLetter(newPhrase[i])) {
      newPhrase[i] = forwardShifter(newPhrase[i]);
    }
  }
  newPhrase = newPhrase.join('');
  return newPhrase;
}

function shiftBackwardOnce(phrase) {
  let newPhrase = phrase.split('');
  for(i=0;i<newPhrase.length;i++){
    if (isLetter(newPhrase[i])) {
      newPhrase[i] = backwardsShifter(newPhrase[i]);
    }
  }
  newPhrase = newPhrase.join('');
  return newPhrase;
}
