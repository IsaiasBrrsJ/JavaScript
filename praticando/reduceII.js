let myObj = [
{
  'Title': "The movie",
  'Year' : '2045'
},
{
   'Title': "I think guess absolutely",
  'Year' : '2030' 
},
{
  'Title': "ss",
  'Year' : '2045'
}
];

let myReduce = myObj.filter((x) => Number(x.Year) > 2030) .reduce((x, el) => {
    
    const cont = x.count +1;
    console.log(cont);
    const newValue = x.average + Number(el.Year);
    console.log(newValue)
    
    return {
        count : cont,
        sum : newValue,
        average: newValue / cont
    }
}, {count : 0, sum: 0, average: 0});

console.log(myReduce);