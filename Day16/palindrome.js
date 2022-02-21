function palindrome(str) {
    let cleanedStr = str.split("").filter(elem => elem.match(/[A-Za-z0-9]/));
    let revArray = [];

    cleanedStr.map(elem => revArray.unshift(elem));


    return cleanedStr.join('').toLowerCase() === revArray.join('').toLowerCase();
}

console.log(palindrome("A man, a plan, a canal. Panama"));