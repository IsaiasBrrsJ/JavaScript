function logParams(a, b, c) {
    console.log(a, b, c);
}

logParams(1, 2, 3);

function defaultParams(a, b, c= 0) {
    console.log(a, b, c);
}

defaultParams(3, 4)

//spread/rest
function logNums(...nums) {
    
 console.log(nums);
}

logNums(10);

function sumAll(...nums) {
    let total = 0;

    for (let n of nums) {
        total += n;
    }

    return `Total: ${total}`;
}

console.log(sumAll(1, 2, 3));
