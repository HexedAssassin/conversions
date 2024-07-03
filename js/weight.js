// Metric to grams
function milligramToGram(mg){
    return mg * 0.001;
}

function kilogramToGram(kg){
    return kg * 1000;
}

function metricTonToGram(mt){
    return mt * 1000000;
}

// Grams to metric
function gramToMilligram(g){
    return g * 1000;
}

function gramToKilogram(g){
    return g / 1000;
}

function gramToMetricTon(g){
    return g / 1000000;
}

// Imperial to grams

function ounceToGram(oz){
    return oz * 28.3495;
}

function poundToGram(lb){
    return lb * 453.592;
}

function tonToGram(t){
    return t * 907184.74;
}

// Grams to imperial

function gramToOunce(g){
    return g / 28.3495;
}

function gramToPound(g){
    return g / 453.592;
}

function gramToTon(t){
    return t / 907184.74;
}



function convert() {
    let inputText = document.getElementById('inputText').value.trim();
    let fromConversionType = document.getElementById('fromConversionType').value;
    let toConversionType = document.getElementById('toConversionType').value;
    let outputText = '';

    let grams = 0;

    switch(fromConversionType){
        case 'mg':
            grams = milligramToGram(inputText);
            break;
        case 'kg':
            grams = kilogramToGram(inputText);
            break;
        case 'mt':
            grams = metricTonToGram(inputText);
            break;
        case 'oz':
            grams = ounceToGram(inputText);
            break;
        case 'lb':
            grams = poundToGram(inputText);
            break;
        case 't':
            grams = tonToGram(inputText);
            break;
        default:
            grams = inputText;
            break;
    }

    switch(toConversionType){
        case 'mg':
            outputText = gramToMilligram(grams);
            break;
        case 'kg':
            outputText = gramToKilogram(grams);
            break;
        case 'mt':
            outputText = gramToMetricTon(grams);
            break;
        case 'oz':
            outputText = gramToOunce(grams);
            break;
        case 'lb':
            outputText = gramToPound(grams);
            break;
        case 't':
            outputText = gramToTon(grams);
            break;
        default:
            outputText = grams;
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