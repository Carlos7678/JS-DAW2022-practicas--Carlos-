const form = document.createElement('form');
const nombreLabel = document.createElement('label');
nombreLabel.textContent = 'Nombre: ';
const nombreInput = document.createElement('input');
nombreInput.type = 'text';
nombreInput.id = 'nombre';

const apellidoLabel = document.createElement('label');
apellidoLabel.textContent = 'Apellido: ';
const apellidoInput = document.createElement('input');
apellidoInput.type = 'text';
apellidoInput.id = 'apellido';

const submitButton = document.createElement('button');
submitButton.textContent = 'Enviar datos';
submitButton.type = 'button';

const saludoParrafo = document.createElement('p');
saludoParrafo.id = 'saludo';

form.appendChild(nombreLabel);
form.appendChild(nombreInput);
form.appendChild(apellidoLabel);
form.appendChild(apellidoInput);
form.appendChild(submitButton);

document.body.appendChild(form);
document.body.appendChild(saludoParrafo);

submitButton.addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const mensaje = `Hola, buenos días ${nombre} ${apellido}, gracias por rellenar el formulario.`;
  saludoParrafo.textContent = mensaje;
});
