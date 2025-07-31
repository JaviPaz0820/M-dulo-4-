function verificarNumero() {
  let anio = parseInt(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");

  if (isNaN(anio) || anio < 0) {
    resultado.textContent = "Valor inválido. Ingresa un número mayor o igual a cero.";
    resultado.style.color = "red";
  } else {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
      resultado.textContent = anio + " es un año bisiesto.";
      resultado.style.color = "green";
    } else {
      resultado.textContent = anio + " no es un año bisiesto.";
      resultado.style.color = "black";
    }
  }
}

