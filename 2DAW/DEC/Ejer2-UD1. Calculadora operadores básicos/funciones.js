function resta_y_muestra() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultado = parseInt(numero1) - parseInt(numero2);
    alert("La resta es: " + resultado);
    return resultado;
  }

  function multiplicar_y_muestra() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultado = parseInt(numero1) * parseInt(numero2);
    alert("La multiplicacion es: " + resultado);
    return resultado;
  }

  function dividir_y_muestra() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultado = parseInt(numero1) / parseInt(numero2);
    alert("La division es: " + resultado);
    return resultado;
  }