function filteredArray(arr, elem) {
  let newArr = [];
  // Altere apenas o código abaixo desta linha
 
 
    for(let i = 0; i < arr.length; i++){
         var possuiValor = false;
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] == elem){
          possuiValor = true;
        }

        if(possuiValor === false && j === arr[i].length-1){
          newArr.push(arr[i]);
          break;
        }
    
      }
     
    }
  // Altere apenas o código acima desta linha
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

/* 
filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) deve retornar [[10, 8, 3], [14, 6, 23]]
filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) deve retornar [["flutes", 4]]
filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") deve retornar [["amy", "beth", "sam"]]
filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) deve retornar []
A função filteredArray deve usar o laço for
*/