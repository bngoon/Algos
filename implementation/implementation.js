function bonAppetit(bill, k, b) {
    const total = bill.reduce((acc, val)=> acc + val, 0);
    const charges = (total - bill[k]) / 2;
    if (charges === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - charges);
    }
}
const bill = [3, 10, 2, 9];  // Cost of each item ordered
const k = 1;  // Anna didn't eat the item at index 1 (10)
const b = 12;  // Anna contributed 12 dollars

bonAppetit(bill, k, b);