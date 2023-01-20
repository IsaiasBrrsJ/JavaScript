
const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
];

const greatStudent = (students) => students.score >= 9;

const getScore = (el) => el.score;

const avg = (acc, el, i, arr) => {

    if (i === arr.length-1) {
        return (acc + el) / arr.length
    }
    else {
        return (acc + el);
    }
}

console.log(
    students.filter(greatStudent)
        .map(getScore)
        .reduce(avg)
);

var teste = [1, 2, 3, 4, 5];

var red = (acc, el) => acc + el;


const obj = {
    person: {
        name: "test",
        age: 1
    }
};

function removeFirstTwo(list){

    const [a, b, ...remove] = list;

    return remove;
}

console.log(removeFirstTwo([1, 2, 3, 4, 5]));


const obje = {
    gear : 2,
    setGear(gea){
     this.gear = gea;
  }
};

