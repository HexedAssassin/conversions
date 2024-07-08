// Metric to meter
function kilometerToMeter(km){
    return km * 1000;
}

function centimeterToMeter(cm){
    return cm / 100;
}

function millimeterToMeter(mm){
    return mm / 1000;
}

// Meter to metric
function meterToKilometer(m){
    return m / 1000;
}

function meterToCentimeter(m){
    return m * 100;
}

function meterToMillimeter(m){
    return m * 1000;
}

// Imperial to meter

function mileToMeter(mi){
    return mi * 1609.344;
}

function yardToMeter(yd){
    return yd * 0.9144;
}

function footToMeter(ft){
    return ft * 0.3048;
}

function inchToMeter(inch){
    return inch * 0.0254;
}


// Meter to imperial
function meterToMile(m){
    return m / 1609.344;
}

function meterToYard(m){
    return m / 0.9144;
}

function meterToFoot(m){
    return m / 0.3048;
}

function meterToInch(m){
    return m / 0.0254;
}


function convert() {
    let inputText = document.getElementById('inputText').value.trim();
    let fromConversionType = document.getElementById('fromConversionType').value;
    let toConversionType = document.getElementById('toConversionType').value;
    let outputText = '';

    let meters = 0;
    let inputValue = parseFloat(inputText);

    switch(fromConversionType){
        case 'mm':
            meters = millimeterToMeter(inputValue);
            break;
        case 'cm':
            meters = centimeterToMeter(inputValue);
            break;
        case 'km':
            meters = kilometerToMeter(inputValue);
            break;
        case 'in':
            meters = inchToMeter(inputValue);
            break;
        case 'ft':
            meters = footToMeter(inputValue);
            break;
        case 'yd':
            meters = yardToMeter(inputValue);
            break;
        case 'mi':
            meters = mileToMeter(inputValue);
            break;
        default:
            meters = inputValue;
            break;
    }

    switch(toConversionType){
        case 'mm':
            outputText = meterToMillimeter(meters);
            break;
        case 'cm':
            outputText = meterToCentimeter(meters);
            break;
        case 'km':
            outputText = meterToKilometer(meters);
            break;
        case 'in':
            outputText = meterToInch(meters);
            break;
        case 'ft':
            outputText = meterToFoot(meters);
            break;
        case 'yd':
            outputText = meterToYard(meters);
            break;
        case 'mi':
            outputText = meterToMile(meters);
            break;
        default:
            outputText = meters;
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