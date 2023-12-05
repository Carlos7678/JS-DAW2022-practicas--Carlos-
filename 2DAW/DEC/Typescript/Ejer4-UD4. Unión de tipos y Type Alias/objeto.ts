const alumno = {
  nombre: "Carlos",
  edad: 20,
  activo: true,
};

console.log("Nombre: " + alumno.nombre);
console.log("Edad: " + alumno.edad);
console.log("Activo: " + alumno.activo);

const array: (string | number | boolean)[] = ["Carlos", 20, true];
console.log(array);

interface Alumno {
  nombre: string;
  edad: number;
  activo: boolean;
}

const alumno2: Alumno = {
  nombre: "Joao",
  edad: 19,
  activo: true,
};
console.log();

type Hobbies = "consola" | "futbol" | "musica" | "programar" | "pensar";

const hobbiePrincipal: Hobbies = "consola";
if (hobbiePrincipal === "consola") {
    console.log(true);
  } else {
    console.log(false);
  }

