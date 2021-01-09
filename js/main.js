var nome = "Jonathan Braga";
var idade = 38;

var n1 = 10;
var n2 = 6;

var lista = ["maça","pêra","laranja"];

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"limão", cor:"verde"}];

alert(nome +" tem "+ idade +" anos.");

//para debugar no F12 do navegador
console.log(nome);
console.log(idade);

//operações
console.log("Soma: "+n1 + n2);
console.log("Multiplicação: "+n1 * n2);

//lendo arrays
console.log(lista[1]);
alert(lista[2]);

//modificando arrays
lista.push("uva");
alert(lista);
lista.pop();
alert(lista);

//convertendo
console.log(lista);
console.log(lista.toString()); //string
console.log(lista.join(" | ")); //string com diferente separador

//dicionário OO
console.log(frutas);
alert(frutas[1].nome);
alert(frutas[2].cor);

//condicional, laços e datas
var idadec = prompt("Qual a sua idade?");

if (idadec >= 18){
    alert("maior de idade.");
} else {
    alert("menor de idade");
}

var count = 0;
while (count<=5) {
    console.log(count);
    count++;
}

var countf;
for (countf = 0; countf <= 5; countf++) {
    console.log("countf = "+countf)
}

var d = new Date();
console.log("Data atual: "+d);
console.log(d.getMonth() + 1); //retorna o índice do mês, como o primeiro índice no JS é "0", na prática precisaremos somar + 1 para obtermos corretamente o mês.