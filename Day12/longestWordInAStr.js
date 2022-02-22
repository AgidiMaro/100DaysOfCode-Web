function findLongestWordLength(str) {
    let count = 0;
    let word = str.split(' ');
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > count) {
            count = word[i].length;
        }
    }
    return count;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));