nomealuno = prompt("Qual é o seu nome? ")
notaum = prompt("Qual foi a nota da sua primeira avaliação? ")
notadois = prompt("Qual é a nota da sua segunda avaliação? ")
mediaaluno = (parseFloat(notaum) + parseFloat (notadois))/2

if (mediaaluno>=9){
    alert("Parabéns, CRIA, Você é ótimo <3")
}
else if (mediaaluno>=7){
    alert("CRIA, você precisa melhorar, mas está bom")
}
else if(mediaaluno>=5){
    alert("Cara, bora melhorar, tua nota ta triste mas você vai passar raspando")
}

else{
    alert("Você se ferrou, te vejo ano que vem, meu chapa")
}