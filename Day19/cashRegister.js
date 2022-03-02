let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let combo = [];
let sumArray = []


for (i = 0; i < cid.length; i++) {
    for (j = i + 1; j < cid.length + 1; j++) {
        combo.push(cid.slice(i, j));
    }
}

for (let i in combo) {
    let subSum = 0;
    for (let j in combo[i]) {
        subSum += combo[i][j][1];
    }
    sumArray.push(subSum.toFixed(2))
}


console.log(sumArray);