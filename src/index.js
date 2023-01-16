const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let result = '';
    let letter = {};
    
    while (i <= expr.length) {
      if (i > 0 && i % 10 == 0) {
        if (result == '**********'){
          letter[i / 10] = ' ';
        } else {
            // letter[i / 10] = String(+result).replaceAll('10', '.').replaceAll('11', '-');
            letter[i / 10] = String(+result).replace(/10/g, '.').replace(/11/g, '-');
        }
        result = '';
      }
      result = result + expr[i];
      i++;
    }
    // console.table(letter);
    result = '';
    for (let key in letter) {
      if (letter[key] == ' ') {
        result = result + ' ';
      } else {
        result = result + MORSE_TABLE[letter[key]];
      }
    }
    return result;
}

module.exports = {
    decode
}