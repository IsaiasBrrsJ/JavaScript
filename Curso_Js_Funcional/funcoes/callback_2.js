const fs = require('fs')
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(_, conteudo) {
    let conteu = [conteudo.toString()];

   
}
fs.readFile(caminho, {}, exibirConteudo);

console.log("inicio async...");
const lido = fs.readFileSync(caminho);
console.log(lido.toString());
console.log("Fim async...");