function rot13(str) {
    let lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //let splitStr = str.split('').f
    let newArray = '';
    let originalPos = 0;
    let newPos = 0;
    let newLetter = ''

    for (let i = 0; i < str.length; i++) {
        originalPos = lookup.indexOf(str.charAt(i));
        if (originalPos == -1) {
            newArray += str[i];
        }
        else {
            newPos = (originalPos + 13) % 26;
            newLetter = lookup.charAt(newPos);
            newArray += newLetter;
        }
    }
    return newArray;

}

console.log(rot13("SERR PBQR PNZC"));