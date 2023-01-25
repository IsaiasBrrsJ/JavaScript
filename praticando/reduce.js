const products = [
    { name: "Bola", price: 2.42 },
    { name: "Picole", price: 4.4 },
    { name: "Sorvete", price: 1.2 },
    { name: "Saltenha", price: 2.55 }
];

const result = products.reduce((acc, { name}) => `${acc} ${name}`, '');

console.log(result);


const people = [
    { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9, name: 'Gabrieel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }  
];

const agesFrequency = people.reduce((accumulator, { age }) => {
    accumulator[age] = accumulator[age] + 1 || 1; // caso seja false retorna 1, caso nao incrementa mais um

    return accumulator;
}, {});

console.log(agesFrequency);

const returnNames = people.reduce((acc, el) => {
    
    acc += el.name+" \n";

    return acc;
}, '')

console.log(returnNames);

const averageAges = people.reduce((acc, el) => {
    acc = el.age > 18 ? acc += el.age : acc += 0;;
    return acc;
}, 0);

console.log(averageAges / people.filter(x => x.age > 18).length);

