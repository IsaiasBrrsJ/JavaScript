const products = [
    { name: "Lapis", qtde: 10, price: 7.99, fragile: true},
    { name: "Caneta Azul", qtde: 1, price: 649.50, fragile: true},
    { name: "Caneta Preta", qtde: 4, price: 27.10, fragile: false},
    { name: "Caderno", qtde: 3, price: 5.82, fragile: false },
   { name: "borracha", qtde: 1, price: 19.20, fragile: true }
]

//1 fragil true
//2 qtd, preco -> total
//3 media totais;

const filter = (el) => el.fragile;
const map = (el) => (el.price * el.qtde)
console.log
    (
        products
            .filter(filter)
            .map(map)
            .reduce((total, elements) => total + elements) / products.filter(filter).length
    );