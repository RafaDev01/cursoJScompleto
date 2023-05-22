class ValidaCPF{
    constructor(cpf){
        this.cpfEntrada = String(cpf)
        this.cpfSliceDois = this.sliceDois(this.cpfEntrada)
        this.aprimeiroDigito = this.calcDigitos(this.cpfSliceDois)
        this.asegundoDigito = this.calcDigitos(this.cpfSliceDois + this.aprimeiroDigito)
        this.cpfCalculado = this.cpfSliceDois + this.aprimeiroDigito + this.asegundoDigito
        this.validador()
    }   

    sliceDois(cpf){
        return cpf.slice(0,-2)
    }

    calcDigitos(cpfMenosDois){
        let soma = 0;
        let resultadoSoma = 0;

        let elength = cpfMenosDois.length + 1

        for(let calc of cpfMenosDois){
            soma += (Number(calc) * elength)
            elength--
        }
        resultadoSoma = 11 - (soma % 11)
        if(resultadoSoma > 9) resultadoSoma = 0
        return resultadoSoma
    }

    validador(){
        if(this.cpfEntrada === this.cpfCalculado){
            console.log("CPF VALIDO")
        }else{
            console.log("CPF INVALIDO")
        }
    }
}

const cpf1 = new ValidaCPF("123456789")


