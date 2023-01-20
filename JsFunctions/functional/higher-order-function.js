function func(fn) {
   return fn();
}

function sayHello() {
    console.log("isaas");
}

var a = func(Math.random);
console.log(a);

func(() => {
    console.log("Isiaas");
});

func(function () {
    console.log("Testando");
});