const arr = [1,2,3,4,5,6,7,8,9,10,11];
let count = 0;
//Inverter o Array
for (let i = arr.length-1; i >= 0; i--){
   
    let aux = arr[count];
    let auxII = arr[i];
    arr[i] = aux;
    arr[count] = auxII;
    count++;
    if (i === parseInt(arr.length / 2)) { break; }
}
count = 0;
let possuiMaior = false;
while (true) {
    if (count < arr.length-1 && arr[count] > arr[count + 1]) {
        let aux = arr[count];
        arr[count] = arr[count + 1];
        arr[count + 1] = aux;
        possuiMaior = true;
    }
    else if(count === arr.length-1 && possuiMaior === true){
        count = 0;
        possuiMaior = false;
        continue;
    }
    if (possuiMaior === false) { break; }
    count++; 
}
console.log("\n=================array ordenado====================\n");
Array.from(arr, i => console.log(i))             
