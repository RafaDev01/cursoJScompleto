function Calculadora(){
    this.display = document.querySelector(".display")

    this.inicia = () => {
        this.capturaCliques()
        this.capturaEnter()
    }

    
    this.capturaCliques = () =>{
        document.addEventListener("click", evt =>{
            const el = evt.target
            if(el.classList.contains("btn-num")) this.addNumDisplay(el);
            if(el.classList.contains("btn-clear")) this.clear();
            if(el.classList.contains("btn-del")) this.del();
            if(el.classList.contains("btn-eq")) this.realizaConta();
        })
    }
    this.realizaConta = () =>{
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert("conta invalida")
                return
            }

            this.display.value = conta

        }catch(e){
            alert("Conta invalida")
            return
        }
    }

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText 
        this.display.focus()
    }
    this.clear = () => this.display.value = ""
    this.del = () => this.display.value = this.display.value.slice(0 ,-1)

    this.capturaEnter = () =>{
        document.addEventListener("keyup", e =>{
        if(e.keyCode === 13) this.realizaConta()
            
        })
    }
}

const calc = new Calculadora()
calc.inicia()