function suma_y_muestra() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultado = parseInt(numero1) + parseInt(numero2);
    alert("El resultado es: " + resultado);
    return resultado;
  }
    