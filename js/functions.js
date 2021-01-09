function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5,10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

//variaveis global e local

var validarg = 0

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log("Variável Global: "+validarg);
//console.log("Variável Local: "+validar);     //No cenário atual se esta linha for descomentada, irá gerar um erro no console, pois 'validar' é uma varíavel local dentro da function validaIdade