let array = [2, 4, 6, 8, 10];

let condicao = (el, i, arr) => el * 2 + i + arr[i];

let result = array.map(condicao);
console.log(result);

const products = [
    { name: "Lapis", price: 2.30},
    { name: "Caneta Azul", price: 5.30},
    { name: "Caneta Preta", price: 5.30},
    { name: "Caderno", price: 10.30}
]

const product = (el) => el.price >= 5 ? (el.name +" "+ el.price) : null;

Array.prototype.myMap = function (fn) {
    
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this);
        newArr.push(result);
    }

    return newArr;
};

var prod = products.myMap(product);
console.log(prod);