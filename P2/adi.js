var numAleatorio = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function adivinarNumero() {
  intentos++;
  var numero = parseInt(document.getElementById("numero").value);
  var mensaje;

  if (numero == numAleatorio) {
    mensaje = "¡Felicidades! Adivinaste el número en " + intentos + " intentos";
    document.getElementById("resultado").style.color = "green";
    document.getElementById("numero").disabled = true;
    alert(mensaje);
  } else if (numero < numAleatorio) {
    mensaje = "El número ingresado es menor al número buscado";
    document.getElementById("resultado").style.color = "red";
    alert(mensaje);
  } else {
    mensaje = "El número ingresado es mayor al número buscado";
    document.getElementById("resultado").style.color = "red";
    alert(mensaje);
  }

  
}