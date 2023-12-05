class Alumno {
  constructor(nombre, email, nombre, contraseña, curso, modulo) {
    this.nombre = nombre;
    this.email=email;
    this.nombre=nombre;
    this.contraseña=contraseña;
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
console.log("nombre: "+Alumno1.nombre+"\nemail: "+Alumno1.email+"\nCurso: "+Alumno1.curso+"\nModulo: "+Alumno1.modulo);
}

iniciar();
mostrarDatos();