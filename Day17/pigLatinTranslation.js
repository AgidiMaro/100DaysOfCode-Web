function translatePigLatin(str) {

    if (/^[^aeiou]/.test(str[0])) {
        return str.replace(/^[^aeiou]+/, "") + str.match(/^[^aeiou]+/) + 'ay';
    }
    else {
        return str + 'way';
    }


    return str;
}

console.log(translatePigLatin("glove"));