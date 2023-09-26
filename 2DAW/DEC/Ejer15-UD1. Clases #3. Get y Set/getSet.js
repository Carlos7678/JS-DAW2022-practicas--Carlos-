class AlumnoDAW {
    constructor(nombre, apellido, email, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.edad = edad;
    }
  
 
    get nombre() {
      return this._nombre;
    }
  

    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get apellido() {
      return this._apellido;
    }

    set apellido(nuevoApellido) {
      this._apellido = nuevoApellido;
    }

    get email() {
      return this._email;
    }

    set email(nuevoEmail) {
      this._email = nuevoEmail;
    }
  

    get edad() {
      return this._edad;
    }

    set edad(nuevaEdad) {
      this._edad = nuevaEdad;
    }
  }
  

  alumno = new AlumnoDAW("Juan", "Perez", "juan@gmail.com", 25);
  
  console.log(alumno.nombre); 
  alumno.nombre = "Pedro";     
  console.log(alumno.nombre); 
  