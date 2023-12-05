
let modulos = new Map();

modulos.set('DAW', { horas: 180, alumnos: ['Carlos', 'Cecilia'] });
modulos.set('DEC', { horas: 220, alumnos: ['Charles', 'Manu'] });
modulos.set('DWS', { horas: 150, alumnos: ['Charls', 'Anuel'] });
modulos.set('DIW', { horas: 200, alumnos: ['Carles', 'Ozuna'] });

for (const [modulo, datos] of modulos) {
  console.log(`${modulo}: ${datos.horas} horas`);
  console.log(`Alumnos: ${datos.alumnos.join(', ')}`);
}
