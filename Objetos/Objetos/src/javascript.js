//Objetos

const dog = [
    {
        "name": "Dog",
        "age": 33,
        "eat": "bread"
    },
    {
        "name": "teste",
        "age": 22,
        "eat" : "water with sugar"
    }
];


function VerificarNomePropriedade(prop, name) {
    for (let i = 0; i < dog.length; i++){
        if (name == dog[i][prop]) {
            console.log(dog[i][prop])
        }
        
        if (dog[i].hasOwnProperty(prop)) {
            console.log("is a property");
        }
    }
}

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords() {
  
    interna(recordCollection, 2468, 'tracks', 'ABBA');
}

function interna(records, id, prop, value) {
   
    
    if (value == "") {
        delete records[id][prop];
    }
    else if (prop !== "tracks" && value !== "") {
        records[id][prop] = value
    }
    else if (prop === "tracks" && records[id].hasOwnProperty(prop) == false) {
        records[id][prop] = [value];
    }
    else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    }
    console.log(records);
    
}


/*
A função precisa sempre retornar o objeto de coleção de discos completo.
Se prop não for tracks e value não for uma string vazia, atualize ou defina aquela prop do álbum como value.
Se prop for tracks mas o álbum não tiver uma propriedade tracks, crie um array vazio e adicione o value nesse array.
Se prop for tracks e value não for uma string vazia, adicione value ao final do array existente de tracks do álbum.
Se value for uma string vazia, remova a propriedade prop recebida do álbum.

*/