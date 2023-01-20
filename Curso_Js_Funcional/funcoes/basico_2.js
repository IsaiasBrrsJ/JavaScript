function bomDia() {
    console.log('Bom Dia');
}

function boaTarde() {
    console.log('Boa Tarde');
}

//Passar uma func como param para outra func
function executarQualquerCoisa(fn) {
    if (typeof fn == 'function') {
        fn();
    }
    else {
        console.log("Passe uma function no parametro");
    }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

//Retornar uma funcao atraves de outra funcao

function potencia(base) {
    return function (expoente) {
        return Math.pow(base, expoente);
    };
};

var base8 = potencia(2)(8);
console.log(base8);