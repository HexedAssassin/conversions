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
    let inputValue = parseFloat(inputText);

    switch(fromConversionType){
        case 'mg':
            grams = milligramToGram(inputValue);
            break;
        case 'kg':
            grams = kilogramToGram(inputValue);
            break;
        case 'mt':
            grams = metricTonToGram(inputValue);
            break;
        case 'oz':
            grams = ounceToGram(inputValue);
            break;
        case 'lb':
            grams = poundToGram(inputValue);
            break;
        case 't':
            grams = tonToGram(inputValue);
            break;
        default:
            grams = inputValue;
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

document.getElementById("inputText").addEventListener("keyup",function(e){
    if (e.key == "Enter"){
            document.getElementById("convert").click();
        }
});