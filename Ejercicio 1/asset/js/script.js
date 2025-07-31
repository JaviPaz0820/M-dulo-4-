function verificarNumero() {
  let numero = parseInt(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");

  if ((numero > 5 && numero < 15) || numero === 70 || numero === 55) {
    resultado.textContent = "El número ingresado tiene opciones de ganar <3";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Lo siento, el número ingresado no es favorable :P";
    resultado.style.color = "red";
  }
}
