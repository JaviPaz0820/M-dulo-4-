function verificar() {
  var edad = parseInt(document.getElementById("edad").value);
  var cedula = document.getElementById("cedula").value.toLowerCase();
  var ahorro = parseFloat(document.getElementById("ahorro").value);
  var registro = document.getElementById("registro").value.toLowerCase();
  var resultado = document.getElementById("resultado");

  if (edad >= 18) {
    if (cedula === "sí" || cedula === "si") {
      if (ahorro >= 4) {
        if (registro === "sí" || registro === "si") {
          resultado.textContent = "Cumples con los requisitos para postular al subsidio.";
        } else {
          resultado.textContent = "No cumples: Debes pertenecer al 70% más vulnerable.";
        }
      } else {
        resultado.textContent = "No cumples: Debes tener al menos 4 UF de ahorro.";
      }
    } else {
      resultado.textContent = "No cumples: Debes tener cédula de identidad vigente.";
    }
  } else {
    resultado.textContent = "No cumples: Debes ser mayor de 18 años.";
  }
}

