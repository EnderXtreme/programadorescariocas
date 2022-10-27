class Animal{
    constructor(nome){
    this.nome = nome
    }
    falar(){
        console.log(this.nome + " faz barulhos")
    }
}

let animal = new Animal("abc")
animal.falar()

//--------------------------------------------------------
class Cachorro extends Animal{

    falar(){
        console.log(this.nome + " latir")
    }
}
let cachorro = new Cachorro ("Dog")
cachorro.falar()

//---------------------------------------------------------------
class Gatinho extends Animal{

    falar(){
        console.log(this.nome + " faz miau")
    }
}
let gatinho = new Gatinho ("Gatinho")
gatinho.falar()