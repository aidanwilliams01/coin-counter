export function coinCounter(amount) {
    const quarters = Math.floor(amount / .25);
    // coinCounter(amount - quarters * .25);
    // const dimes = amount / .1;
    // const nickels = amount / .05;
    // const pennies = amount /.01;

    return `${quarters} quarters`;
}