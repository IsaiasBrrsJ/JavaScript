//Somar(2)(2)(3);
//func(2)(2)(fn);


var somar = (a, b, c = 0) => {
    console.log("Resultado: "+ (a + b + c));
}

function calc(a, b, fn) {
    if (typeof fn == 'function') {
        fn(a,b);
    }
    else {
        console.log("informe a funcao de calculo");
    }
}

calc(1, 3, somar);

