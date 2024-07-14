function updates() {
    const userEnteredText = document.getElementById("inputText").value;
    document.getElementById("wordCount").textContent = wordCounter(userEnteredText)
    document.getElementById("charCount").textContent = charCounter(userEnteredText)
    document.getElementById("numCount").textContent = numCounter(userEnteredText)
    document.getElementById("splChrCount").textContent = splCharCounter(userEnteredText)
    document.getElementById("paraCount").textContent = paraCounter(userEnteredText)
}

//using regular function to find non-space char
function wordCounter(userEnteredText) {
    const words = userEnteredText.match(/\S+/g);
    return words ? words.length : 0;
}

function charCounter(userEnteredText) {
    return userEnteredText.length
}

//Using regular func to find digits
function numCounter(userEnteredText) {
    const number = userEnteredText.match(/\d/g);
    return number ? number.length : 0;
}

// using regular func to find all spl char
function splCharCounter(userEnteredText) {
    const splChr = userEnteredText.match(/[!@#$%^&*().,?":{}|<>~`]/g);
    return splChr ? splChr.length : 0;
}

//using regular function /n text to the array
function paraCounter(userEnteredText) {
    const paragraphs = userEnteredText.split(/\n/).filter (paragraph => paragraph.trim().length > 0);
    return paragraphs ? paragraphs.length : 0;
}