function millisecondToSecond(ms){
    return ms / 1000;
}

function secondToMillisecond(sec){
    return sec * 1000;
}

function minuteToSecond(min){
    return min * 60;
}

function secondToMinute(sec){
    return sec / 60;
}

function hourToSecond(hr){
    return hr * 3600;
}

function secondToHour(sec){
    return sec / 3600;
}

function dayToSecond(day){
    return day * 86400;
}

function secondToDay(sec){
    return sec / 86400;
}

function yearToSecond(yr){
    return yr * 31536000;
}

function secondToYear(sec){
    return sec / 31536000;
}

function decadeToSecond(dc){
    return dc * 315360000;
}

function secondToDecade(sec){
    return sec / 315360000;
}

function centuryToSecond(cent){
    return cent * 3153600000;
}

function secondToCentury(sec){
    return sec / 3153600000;
}

function millenniumToSecond(mil){
    return mil * 31536000000;
}

function secondToMillennium(sec){
    return sec / 31536000000;
}

function convert() {
    let inputText = document.getElementById('inputText').value.trim();
    let fromConversionType = document.getElementById('fromConversionType').value;
    let toConversionType = document.getElementById('toConversionType').value;
    let outputText = '';

    let seconds = 0;
    let inputValue = parseFloat(inputText);

    switch(fromConversionType){
        case 'ms':
            seconds = millisecondToSecond(inputValue);
            break;
        case 'mins':
            seconds = minuteToSecond(inputValue);
            break;
        case 'hrs':
            seconds = hourToSecond(inputValue);
            break;
        case 'days':
            seconds = dayToSecond(inputValue);
            break;
        case 'yrs':
            seconds = yearToSecond(inputValue);
            break;
        case 'dc':
            seconds = decadeToSecond(inputValue);
            break;
        case 'cent':
            seconds = centuryToSecond(inputValue);
            break;
        case 'mil':
            seconds = millenniumToSecond(inputValue);
            break;
        default:
            seconds = inputValue;
            break;
    }

    switch(toConversionType){
        case 'ms':
            outputText = secondToMillisecond(seconds);
            break;
        case 'mins':
            outputText = secondToMinute(seconds);
            break;
        case 'hrs':
            outputText = secondToHour(seconds);
            break;
        case 'days':
            outputText = secondToDay(seconds);
            break;
        case 'yrs':
            outputText = secondToYear(seconds);
            break;
        case 'dc':
            outputText = secondToDecade(seconds);
            break;
        case 'cent':
            outputText = secondToCentury(seconds);
            break;
        case 'mil':
            outputText = secondToMillennium(seconds);
            break;
        default:
            outputText = seconds;
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