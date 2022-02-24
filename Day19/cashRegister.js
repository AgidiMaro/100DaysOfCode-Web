function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    const lookupDollar = { PENNY: 0.01, NICKEL: 0.05, DIME: 0.1, QUARTER: 0.25, ONE: 1, FIVE: 5, TEN: 10, TWENTY: 20, 'ONE HUNDRED': 100 }

    let result = {};
    let totalDollar = 0;
    for (let currencyUnit in cid) {
        totalDollar += cid[currencyUnit][1]
    }
    if (totalDollar < changeDue) {
        result = { status: "INSUFFICIENT_FUNDS", change: [] }
    }

    else if (totalDollar == changeDue) {
        result = { status: "CLOSED", change: [...cid] }
    }

    else {
        result = { status: "OPEN", change: [...cid] }
    }

    return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));