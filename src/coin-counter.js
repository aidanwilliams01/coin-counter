export function coinCounter(amount, result) {
    if (result === undefined) {
        result = '';
    }
    amount = amount.toPrecision(3);
    const quarters = Math.floor(amount / .25);
    if (quarters === 0) {
        const dimes = Math.floor(amount / .1);
        if (dimes === 0) {
            const nickels = Math.floor(amount / .05);
            if (nickels === 0) {
                const pennies = Math.floor(amount / .01);
                if (pennies === 0) {
                    if (result.slice(0, 2) === ', ') {
                        return result.slice(2);
                    }
                    return result;
                }
                return coinCounter(0, result + `, ${pennies} pennie(s)`);
            }
            return coinCounter(amount - nickels * .05, result + `, ${nickels} nickel(s)`);
        }
        else {
            return coinCounter(amount - dimes * .1, result + `, ${dimes} dime(s)`);
        }
        }
    return coinCounter(amount - quarters * .25, `${quarters} quarter(s)`);
}

export function closureCoinCounter(amount) {
    amount = amount.toPrecision(3);
    return function() {
        const quarters = Math.floor(amount / .25);
        return `${quarters} quarter(s)`
    }
  }