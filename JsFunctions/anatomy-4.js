//Anonymous function
// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
   
    console.log(`Result: ${a + b + c}`);
})(1, 2, 3);

(function (a, b, c) {
    let x = 3;
    console.log(`Result: ${a + b + c}`);
    console.log(x);

})(1, 2, 3);

 (function () {
    let x = "Function anonymous";
       console.log(x);
 })();


(() => console.log('Arrow #01'))();