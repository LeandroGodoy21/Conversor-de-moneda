

const formEntrada = document.getElementById("formEntrada");
const respuesta = document.getElementById("valor");

function calculadora(event) {
  event.preventDefault();
  
  const valorImporte = document.getElementById("import").value;
  const valorSelect = document.getElementById("select");
  var resultado = NaN
  if (valorSelect.value === "0") {

    resultado = parseFloat(valorImporte) * 0.91+ "€";
    respuesta.innerText = "El resultado es: " + resultado;

  } else if(valorSelect.value === "1"){

    resultado = parseFloat(valorImporte) * 0.79;
    respuesta.innerText = "El resultado es: " + resultado + "₤";

  }else if(valorSelect.value === "2"){

    resultado = parseFloat(valorImporte) * 256.24;
    respuesta.innerText = "El resultado es: " + resultado + "$ARS";

  }
}

// Programa
formEntrada.addEventListener("submit", calculadora);
