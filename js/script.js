
function sumatoria(n) {
  if (n < 1 || n >= 100) return "Número fuera de rango";
  let suma = 0;
  for (let i = 1; i <= n; i++) suma += i;
  return suma;
}

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function cuentaRegresiva(n) {
  if (n < 1 || n >= 100) return "Número fuera de rango";
  let arr = [];
  for (let i = n; i >= 1; i--) arr.push(i);
  return arr.join(", ");
}

function sumatoriaPares(n) {
  if (n <= 10 || n >= 1000) return "Número fuera de rango";
  let suma = 0;
  for (let i = 2; i <= n; i += 2) suma += i;
  return suma;
}

function tablaMultiplicar(n) {
  let tabla = "";
  for (let i = 1; i <= 12; i++) {
    tabla += `${n} x ${i} = ${n * i}\n`;
  }
  return tabla;
}

function ordenarArreglo(arr) {
  return arr.sort((a, b) => a - b);
}


function ejecutarSumatoria() {
  let n = parseInt(document.getElementById("sumatoriaInput").value);
  document.getElementById("sumatoriaResultado").innerText = sumatoria(n);
}

function ejecutarPrimo() {
  let n = parseInt(document.getElementById("primoInput").value);
  document.getElementById("primoResultado").innerText = esPrimo(n) ? "Es primo" : "No es primo";
}

function ejecutarRegresiva() {
  let n = parseInt(document.getElementById("regresivaInput").value);
  document.getElementById("regresivaResultado").innerText = cuentaRegresiva(n);
}

function ejecutarPares() {
  let n = parseInt(document.getElementById("paresInput").value);
  document.getElementById("paresResultado").innerText = sumatoriaPares(n);
}

function ejecutarTabla() {
  let n = parseInt(document.getElementById("tablaInput").value);
  document.getElementById("tablaResultado").innerText = tablaMultiplicar(n);
}

function ejecutarOrdenar() {
  let input = document.getElementById("arregloInput").value;
  let arr = input.split(",").map(Number);
  document.getElementById("arregloResultado").innerText = "[" + ordenarArreglo(arr) + "]";
}
