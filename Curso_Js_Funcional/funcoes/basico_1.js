let a = 5;

//Function declaration
function BomDia() {
    console.log("Bom dia");
}
BomDia();

//function expression
const functionExpression = function (){
    console.log("Boa tarde");
}
functionExpression();
//

function somar(a, b) {
    return a + b;
}

const resultado = somar(2, 5);
console.log(resultado);


function tax(taxa) {
    return function (val) {
        return taxa * val;
    }
}

var taxa = tax(2);
console.log(taxa(30));

