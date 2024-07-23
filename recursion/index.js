function printNumbers(index, arr){
    if(index === arr.length) return;

    console.log(arr[index]);
    printNumbers(index + 1, arr)
}

printNumbers(0,[1,2,3,4])

function power(number, exponent){
    debugger
if(exponent === 1) return number;
return number * power(number, exponent - 1);
}

console.log(power(2,5))

function fib(n) {
    if (n === 2 || n === 1) return 1; 
    return n - 1 + n -2
}
console.log(fib(4))