class Usuario {
    constructor(nombre, email, contraseña) {
      this.nombre = nombre;
      this.email = email;
      this.contraseña = contraseña;
    }
  
    saludar() {
      console.log("Hola soy " + this.nombre);
    }
  
    login(email, contraseña) {
      return this.email === email && this.contraseña === contraseña;
    }
  }
  
  class AlumnoASIR extends Usuario {
    constructor(nombre, email, contraseña) {
      super(nombre, email, contraseña);
      this.cursos = [];
      this.activo = false;
    }
  }
  
  class AlumnoDAW extends Usuario {
    constructor(nombre, email, contraseña) {
      super(nombre, email, contraseña);
      this.cursos = [];
      this.activo = false;
    }
  }
  
  const Carlos = new AlumnoASIR("Carlos", "carlos@yahoo.com", "123");
  const Mbappe = new AlumnoDAW("Kylian", "traidor@gmail.com", "PSG");
  Carlos.saludar();
  console.log(Carlos.login("carlos@yahoo.com", "123")); 
  console.log(Carlos.login("carlos@gmail.com", "123")); 
 Mbappe.saludar();
  console.log(mbappe.login("traidor@gmail.com", "PSG")); 
