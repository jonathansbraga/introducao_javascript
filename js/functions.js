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

//inserindo botões, acionando funções, ajax e eventos 

function clicou() {
    alert("Obrigado por clicar");
}

function clicouAjax() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
}

function redirecionar() {
    //window.open("https://globallabs.academy/");           //abertura em uma nova aba
    window.location.href = "https://globallabs.academy/";   //abertura na janela ativa
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}