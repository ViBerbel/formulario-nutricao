//criacao de botao
var botaoAdicionar = document.querySelector(".botao")
botaoAdicionar.addEventListener("click", function(e){
  e.preventDefault();

  var form = document.querySelector("form-adiciona")

  var paciente = dadosPaciente(form)
})

function dadosPaciente(dados){
  var paciente = {
    nome:dados.nome.value,
    peso:dados.peso.value,
    altura:dados.altura.value,
    gordura:dados.gordura.value,
    imc: calculaImc(dados.peso.value, dados.altura.value)
  }

  return paciente
}

//adiciona novo paciente que foi montado na funcao "montaPaciente" na tabela
function adicionaNovoPaciente(paciente){

}

//monta paciente com os dados registrados na funcao "pegaDado"
function montaPaciente(dados){
  var paciente = document.createElement("div")

  paciente.appendChild(pegaDado(dados))
}


//cria elemento "p" para jogar dentro da div
function pegaDado(dado){
  var p = document.createElement("p")
  p.textContent = dado 

  return p
}