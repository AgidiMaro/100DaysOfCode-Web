function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    }
    else {
        console.log(endNum, "before");
        let arr = rangeOfNumbers(startNum, endNum - 1);
        console.log(endNum, "after recurse");
        console.log(arr);
        arr.push(endNum);
        return arr;
    }
}
console.log(rangeOfNumbers(2, 5));