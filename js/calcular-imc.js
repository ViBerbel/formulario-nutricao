var clientes = document.querySelectorAll(".info-box")

for (let i = 0; i < clientes.length; i++) {

  var cliente = clientes[i]

  var nomeCliente = cliente.querySelector(".info-nome")
  var nome = nomeCliente.textContent
  
  var pesoCliente = cliente.querySelector(".info-peso")
  var peso = pesoCliente.textContent

  var alturaCliente = cliente.querySelector(".info-altura")
  var altura = alturaCliente.textContent;

  var imcCliente = cliente.querySelector(".info-imc")
  console.log(peso)

  var pesoEhValido = validaPeso(peso) 
  var alturaEhValida = validaAltura(altura)

  if(!pesoEhValido){
    console.log(`Parece que tem algo de arrado com peso do(a) ${nome}`)
    pesoEhValido = false
    peso.textContent = "peso invalido"
    cliente.classList.add("data-erro")
  }

  if(!alturaEhValida){
    console.log(`Parece que tem algo de arrado com altura do(a) ${nome}`)
    alturaEhValida = false
    peso.textContent = "peso invalido"
    cliente.classList.add("data-erro")
  }

  if (pesoEhValido && alturaEhValida) {
    imc = calculaImc(peso, altura)
    imcCliente.textContent = imc
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
      return true;
  } else {
      return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00) {
      return true;
  } else {
      return false;
  }
}