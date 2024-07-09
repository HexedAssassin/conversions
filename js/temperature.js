function kelvinToCelcius(k){
    return k - 273.15
}

function celciusToKelvin(c){
    return c + 273.15
}


function fahrenheitToCelcius(f){
    return (f-32)*5/9;
}

function celciusToFahrenheit(c){
    return (c*9/5) + 32
}


function convert() {
    let inputText = document.getElementById('inputText').value.trim();
    let fromConversionType = document.getElementById('fromConversionType').value;
    let toConversionType = document.getElementById('toConversionType').value;
    let outputText = '';

    let celcius = 0;
    let inputValue = parseFloat(inputText);

    switch(fromConversionType){
        case 'f':
            celcius = fahrenheitToCelcius(inputValue);
            break;
        case 'k':
            celcius = kelvinToCelcius(inputValue);
            break;
        default:
            celcius = inputValue;
            break;
    }

    switch(toConversionType){
        case 'f':
            outputText = celciusToFahrenheit(celcius);
            break;
        case 'k':
            outputText = celciusToKelvin(celcius);
            break;
        default:
            outputText = celcius;
            break;
    }

    document.getElementById('outputText').value = Math.round((outputText+Number.EPSILON)*100)/100;
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