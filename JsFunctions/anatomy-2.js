//Anonymous function
(function (a, b, c) {
    return a + b + c;
});




//Function expression

const sum = function (a, b) {
    return a + b;
}

const result = sum(4, 4);
console.log(result);


const anotherSum = sum;

console.log(anotherSum(10, 5));
let x = 3;
