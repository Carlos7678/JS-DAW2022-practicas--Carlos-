let modulos = new Map();
modulos.set('DAW', 'Despliege de aplicaciones web');
modulos.set('DEC', 'Desarrollo Web en Entorno Cliente');  
modulos.set('DWS', 'Desarrollo Web en Entorno Servidor');
modulos.set('DIW', 'Diseño de interfaces web');   // un string como clave

console.log('La cantidad total de modulos son: '+modulos.size)

iterator1 = modulos.keys();
valor = modulos.values();

for (const element of modulos) {
    console.log('La abreviatura es '+iterator1.next().value+ " y su nombre completo es "+valor.next().value );
  }

iterator1 = modulos.keys();
console.log('Abreviaturas')
  for (const element of modulos) {
   console.log(iterator1.next().value)
  }


valor = modulos.values();
console.log('Los nombres completos de los modulos son: ')
  for (const element of modulos) {
      console.log(valor.next().value );
    }

console.log(modulos.has('DAW'));
console.log(modulos.has('GBD'));

modulos.delete('DIW')
iterator1 = modulos.keys();
valor = modulos.values();
for (const element of modulos) {
    console.log('La clave -> '+iterator1.next().value+ " y su valor -> "+valor.next().value );
  }