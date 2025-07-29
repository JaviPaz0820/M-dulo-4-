function convertir() {
  var monto = document.getElementById("monto").value;
  var resultado = document.getElementById("resultado");
  var tipoCambio = 970;

  if (monto !== "" && !isNaN(monto) && monto >= 0) {
    var total = monto * tipoCambio;
    resultado.textContent = "$" + monto + " dólares equivalen a $" + total.toFixed(2) + " pesos chilenos.";
  } else {
    resultado.textContent = "Ingresa un número válido.";
  }
}

