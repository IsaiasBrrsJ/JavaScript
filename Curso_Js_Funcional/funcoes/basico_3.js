//arrow function

const felizNatal = () => console.log('Boa noite');
felizNatal();

const saudacao = (name) => "Fala " + name + "!!!!";
console.log(saudacao('isaias'));

//REST (...array) => pega tudo e joga em um array
const soma = (...array) => {
    let total = 0;
    for (let n of array) {
        total += n;
    }

    return total;
}
console.log(soma(1, 2, 3, 4, 5));

//potencia usando arrow
const result = (base) => (expoente) => Math.pow(base, expoente);
    
const base = 2;
var resultado = result(base)(8);
console.log(resultado);

//This
Array.prototype.ultiEl = function(){
    console.log(this[this.length-1]);
}
const arr = [1, 2, 3, 4, 5];
arr.ultiEl();
