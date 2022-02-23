function isPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) { count++; }
    }
    if (count > 2) {
        return false;
    } else { return true; }
}

function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i) == true) { sum = sum + i; };
    }
    return sum;
}

console.log(sumPrimes(977));