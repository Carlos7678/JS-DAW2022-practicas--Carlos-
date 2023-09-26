class Alumno {
  constructor(matricula, NIA, nombre, apellidos, curso, modulo) {
    this.matricula = matricula;
    this.NIA=NIA;
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.curso=curso;
    this.modulo=modulo;
  }
 
}

function iniciar(){
 Alumno1=new Alumno("458203D",2045896,"Carlos","Soriano",2,"DAW");
 console.log(Alumno1);

}

function mostrarDatos(){
console.log("***************Datos alumnos del complejo Cheste***************");
console.log("Matricula: "+Alumno1.matricula+"\nNIA: "+Alumno1.NIA+"\nCurso: "+Alumno1.curso+"\nModulo: "+Alumno1.modulo);
}

iniciar();
mostrarDatos();