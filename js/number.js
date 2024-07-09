let delimeter = ' ';

const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
    '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
    '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

const reverseMorseCodeMap = Object.fromEntries(
    Object.entries(morseCodeMap).map(([k, v]) => [v, k])
);

// Things to Text
function binaryToText(binary) {
    let text = '';
    let arr = binary.split(' ');
    for (let i = 0; i < arr.length; i++){
        // Convert binary string to its corresponding decimal (base 10) ASCII code. 
        let charCode = parseInt(arr[i],2);
        // Check if conversion is valid
        if (!isNaN(charCode)){
            // Convert character code to char
            text += String.fromCharCode(charCode);
        }
    }
    return text;
}

function hexToText(hex){
    let text = '';
    hex = hex.replace(/\s/g, '');
    for (let i = 0; i < hex.length; i+=2){
        let hexPair = hex.substr(i,2);
        let charCode = parseInt(hexPair, 16);
        text += String.fromCharCode(charCode);
    }
    return text
}


function morseCodeToText(morseCode) {
    return morseCode.split(' ').map(code => reverseMorseCodeMap[code] || '').join('');
}


// Text to Things
function textToBinary(text){
    let binary = '';
    for (let i = 0; i < text.length; i++) {
        // Get the ASCII value of each character
        let charCode = text.charCodeAt(i);
        // Convert ASCII value to binary representation (8-bit)
        let binaryCharCode = charCode.toString(2).padStart(8, '0');
        // Append binary representation to the result
        binary += binaryCharCode + ' ';
    }
    return binary.trim();
}

function textToHex(text){
    let hex = '';
    for (let i = 0; i < text.length; i++){
        let charCode = text.charCodeAt(i);
        let hexPair = charCode.toString(16);
        if (hexPair.length < 2) {
            hexPair = '0' + hexPair;
        }
        hex += hexPair + delimeter;
    }
    hex.trim();
    return hex;
}

function textToMorseCode(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
}

function convert() {
    let inputText = document.getElementById('inputText').value.trim();
    let fromConversionType = document.getElementById('fromConversionType').value;
    let toConversionType = document.getElementById('toConversionType').value;
    let outputText = '';

    let intermediaryText = '';

    switch(fromConversionType){
        case 'binary':
            intermediaryText = binaryToText(inputText);
            break;
        case 'hex':
            intermediaryText = hexToText(inputText);
            break;
        case 'morse':
            intermediaryText = morseCodeToText(inputText);
            break;
        default:
            intermediaryText = inputText;
            break;
    }

    switch(toConversionType){
        case 'binary':
            outputText = textToBinary(intermediaryText);
            break;
        case 'hex':
            outputText = textToHex(intermediaryText);
            break;
        case 'morse':
            outputText = textToMorseCode(intermediaryText);
            break;
        default:
            outputText = intermediaryText;
            break;
    }

    document.getElementById('outputText').value = outputText;
}

function copyToClipboard(elementId) {
    let copyText = document.getElementById(elementId);
    
    // Select the text inside the textarea
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
    // Attempt to copy the selected text to the clipboard
    navigator.clipboard.writeText(copyText.value)
}

function swap(){
    let fromConversionType = document.getElementById('fromConversionType');
    let toConversionType = document.getElementById('toConversionType');

    let fromIndex = fromConversionType.selectedIndex;
    fromConversionType.selectedIndex = toConversionType.selectedIndex;
    toConversionType.selectedIndex = fromIndex;
}