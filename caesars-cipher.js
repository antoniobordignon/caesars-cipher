function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabetReturn = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  let decodedPhrase = "";
  for (let i = 0; i < str.length; i++) {
    var letterToDecode = str[i];

    if (alphabet.indexOf(letterToDecode) >= 0) {
      decodedPhrase += alphabetReturn[alphabet.indexOf(letterToDecode)];
    } else {
      decodedPhrase += letterToDecode; 
    }
  }

  return decodedPhrase ;
}

console.log(rot13("Z"));