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

function decode(encodedString) {
    let decodedString = '';

    // Loop through input string in chunks of 10 characters
    for(let index = 0; index < encodedString.length; index += 10) {
        let morseSymbol = '';

        // Extract a substring of 10 characters
        let substring = encodedString.slice(index, index+10);

        // If substring is all asterisks, it's a space. Add space to result and continue to next iteration.
        if(substring === '**********') {
            decodedString += ' ';
            continue;
        }

        // Loop through substring in steps of 2 characters.
        for(let subIndex = 0; subIndex < 10; subIndex += 2) {
            let twoCharSubstring = substring.slice(subIndex, subIndex+2);

            // If substring is '10', it's a dot in Morse code. Add dot to morseSymbol.
            if(twoCharSubstring === '10') morseSymbol += '.';

            // If substring is '11', it's a dash in Morse code. Add dash to morseSymbol.
            else if(twoCharSubstring === '11') morseSymbol += '-';
        }

        // Find morseSymbol in MORSE_TABLE and add corresponding letter or number to result.
        decodedString += MORSE_TABLE[morseSymbol];
    }

    return decodedString;
}


module.exports = {
    decode
}