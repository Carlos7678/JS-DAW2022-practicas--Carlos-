const vehiculos = ['Caballo','Burro','Aguila','Coche','Tren','Moto'];
console.log(vehiculos.includes("Burro")); 
console.log(vehiculos.find(el=>el.length<5))
console.log(vehiculos.indexOf("Tren"));
console.log(vehiculos.filter(el => el.length==5));