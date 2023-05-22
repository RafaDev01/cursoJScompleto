class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume(){
        this.volume += 2
    }

    diminuirVolume(){
        this.volume -= 2
    }

    //Método estático
    static trocaPilha(){
        console.log("OK trocamos de pilha")
    }
}

const c1 = new ControleRemoto("Shing Ling")
c1.aumentarVolume()

ControleRemoto.trocaPilha()

console.log(c1)