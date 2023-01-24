//Usando Substring

function confirmEnding(str, target) {

   let tamanho = target.length;
   let verificar = str.substring(str.length-tamanho);

  if(verificar === target){
    return true;
  }
  
  return false;
}

confirmEnding("Bastian", "n");

//

//Usandor Lacos de repeticao

function confirmEnding(str, target) {
    
    let cont  = target.split('').length;
    let letrasFinais = "";
    let inverter = "";
    for(let i = 1; i <= cont; i++){
         letrasFinais += str[str.length-i]
     }
    for(let i = letrasFinais.length-1; i >= 0; i--){
      inverter += letrasFinais[i];
    }
   
   if(inverter === target){
     return true;
   }
    
    return false;
}

confirmEnding("Open sesame","same");
///


//Seu código não deve usar o método integrado .endsWith() para resolver o desafio.


/*
("Bastian","n") deve retornar true.
("Congratulation","on") deve retornar true.
("Connor","n") deve retornar false.
("Walking on water and developing software from a specification are easy if both are frozen", "specification") deve retornar false.
("He has to give me a new name","name") deve retornar true.
("Open sesame","same") deve retornar true.
("Open sesame", "sage") deve retornar false.
("Open sesame","game") deve retornar false.
("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") deve retornar false.
("Abstraction", "action") deve retornar true.
*/