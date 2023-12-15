document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos mapeados
    var mappedElement = document.querySelector('.mapped-elements');
    
    // Obtener valores del mapa
    var key2Value = getComputedStyle(mappedElement).getPropertyValue('background-color').trim();
    var key3Value = getComputedStyle(mappedElement).getPropertyValue('border-color').trim();
  
    // Asignar valores a los elementos HTML
    mappedElement.textContent = `Mapa Key2: ${key2Value}, Key3: ${key3Value}`;
  });
  