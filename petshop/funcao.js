ano = prompt("Informe o ano de nascimento")
nome = prompt("Informe seu nome")
idade = atual - ano
atual = 2022
console.log("Sr(a) " ,nome, ", a sua idade é ", idade," anos.")
if(idade=>18){
    alert("Você é maior de idade")
}
else{
    console.log("Você é menor de idade")
}
