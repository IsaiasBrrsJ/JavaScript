//Filter Js

const number = [1, 2, 3, 4, 5, 6];

const greaterThanZero = (el) => el > 0;
const greaterThanTen = (el) => el > 10;
const even = (el) => el % 2 == 0;

console.log(number.filter(greaterThanTen)); // filter pode trazer um array do mesmo tamanho, vazio, itermediarios, mas, nunca maior;

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
];

const greatStudent = (student) => student.score > 9;

console.log(students.filter(greatStudent));
