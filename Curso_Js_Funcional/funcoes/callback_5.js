const products = [
    { name: "Lapis", qtde: 10, price: 2.30},
    { name: "Caneta Azul", qtde: 0, price: 5.30},
    { name: "Caneta Preta", qtde: 12, price: 5.30},
    { name: "Caderno", qtde: 0, price: 10.30}
]

const map = item => item.qtde * item.price;
const getTotal = (acc, el) => acc + el;
const sum = products.map(map).reduce(getTotal);
console.log(sum);

