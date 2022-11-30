function rot13() {
  let string = document.getElementById('string')
  let str = String(string.value)

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
  string.value = ''
  answer.innerHTML = ''
  answer.innerHTML += `Caesars is telling you: `
  answer.innerHTML += decodedPhrase
}