let inputs = [...document.querySelectorAll(".input")];
let submit = document.querySelector("#enviar");
const form = document.getElementById('meuFormulario');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Outras lógicas ou validações que você deseja realizar antes de enviar o formulário
});

class Usuario {
  constructor() {
    this.entradas = inputs;
    this.todosCamposPreenchidos = false
    
    form.addEventListener("input", ()=>{
        this.nome = document.querySelector("#nome").value;
        this.sobrenome = document.querySelector("#sobrenome").value;
        this.cpf = document.querySelector("#cpf").value;
        this.usuario = document.querySelector("#usuario").value;
        this.senha = document.querySelector("#senha").value;
        this.rsenha = document.querySelector("#rsenha").value;
    })

    submit.addEventListener("click", () => {
        this.todosCamposPreenchidos = this.verificaVazio()
        if(!this.verificaUsuario(this.usuario)){
            alert("USUARIO INVALIDO")
            return
        }

        if(this.todosCamposPreenchidos === true){
            console.log("O formulario foi enviado")
        }
    });
  }

  verificaVazio() {
    let tudoOk = 0;
    let vazio = "";
  
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === vazio) {
        return "Todos campos precisam ser preenchidos";
      }
      tudoOk++;
    }
  
    if (inputs.length === tudoOk) {
      return true;
    }
  }

  verificaUsuario(usuario) {
    if(typeof usuario === "undefined"){
        return false
    }

    if(usuario.length < 3 || usuario.length > 11){
        return false
    }
    let caractereInvalido = 0;
    let caracteresEspeciais = [
      '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
      ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
      '}', '~', '´', '`'
    ];
  
    for (let caractere of usuario) {
      if (caracteresEspeciais.includes(caractere)) {
        caractereInvalido++;
        break; // Termina o loop se um caractere especial for encontrado
      }
    }
  
    if (caractereInvalido > 0) {
      console.log('O usuário contém caracteres especiais.');
      return false
    } else {
      console.log('O usuário não contém caracteres especiais.');
      return true
    }
    console.log(this.usuario)
  }
}

let user = new Usuario();

console.log(user);