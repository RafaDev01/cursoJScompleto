class ValidaCpf{
    constructor(cpfEnviado){
        this.cpfEnviado = cpfEnviado
        this.cpfSomando = this.sliced()
        this.digito1 = this.calculaDigito(this.cpfSomando)
        this.digito2 = this.calculaDigito(this.cpfSomando + this.digito1) 
        this.cpfValido = this.validador()
        console.log(this.cpfValido)
    }

    sliced(){
        let cpfSlice = this.cpfEnviado.toString().slice(0,-2)
        return cpfSlice 
    }

    calculaDigito(cpfSomando){
        let length = cpfSomando.length + 1
        let acumulador = 0
        let digito = 0
        for(let valor of cpfSomando){
            acumulador += Number(valor) * length
            length--
        }
        digito = 11 - (acumulador % 11)
        if(digito >= 10) digito = 0
        return digito
    }

    validador(){
        if(this.cpfEnviado.toString() === this.cpfSomando + this.digito1 + this.digito2){
            return true
        }else{
            return false
        }
    }
}

let cpf = new ValidaCpf(11111111110)

