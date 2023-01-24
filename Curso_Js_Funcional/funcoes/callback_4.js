
const products = [
    { name: "Lapis", qtde: 10, price: 2.30},
    { name: "Caneta Azul", qtde: 0, price: 5.30},
    { name: "Caneta Preta", qtde: 12, price: 5.30},
    { name: "Caderno", qtde: 0, price: 10.30}
]

// const name = item => item.name;
 const qtdeMaiorQueZero = item => item.qtde > 0;
// var a = products.filter(qtdeMaiorQueZero).map(name);
// console.log(a);

//Implementando manualmente Filter

Array.prototype.myFilter = function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        if (fn(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }

    return newArr;
}

const a = products.myFilter(qtdeMaiorQueZero);
console.log(a);