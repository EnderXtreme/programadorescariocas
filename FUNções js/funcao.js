nome = prompt ("Qual é o seu nome?")
idade = prompt("Informe a idade")

if (idade<10){
    console.log('criança')
}
else{
    if(idade<18){
        console.log('adolescente')
    }
    else{
        if(idade<60){
            console.log('adulto')
        }
        else{
            console.log("idoso")
        }
    }
}



