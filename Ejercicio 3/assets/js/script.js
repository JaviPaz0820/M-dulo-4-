function verificarSet() {
  let m = parseInt(document.getElementById("jugadorA").value); 
  let n = parseInt(document.getElementById("jugadorB").value); 
  let resultado = document.getElementById("resultado");

  if (isNaN(m) || isNaN(n) || m < 0 || n < 0) {
    resultado.textContent = "Valores inválidos. Debes ingresar números mayores o iguales a 0.";
    resultado.style.color = "red";
    return;
  }
  if ((m === 7 && (n === 5 || n === 6)) || (m === 6 && n <= 4)) {
    resultado.textContent = "Jugador A ganó el set.";
    resultado.style.color = "green";
  } else if ((n === 7 && (m === 5 || m === 6)) || (n === 6 && m <= 4)) {
    resultado.textContent = "Jugador B ganó el set.";
    resultado.style.color = "green";
  } else if ((m <= 7 && n <= 7) && !(m === 7 && n < 5) && !(n === 7 && m < 5) && !(m === 6 && n === 6)) {
    resultado.textContent = "El set todavía no termina.";
    resultado.style.color = "orange";
  } else {
    resultado.textContent = "Resultado inválido.";
    resultado.style.color = "red";
  }
}
