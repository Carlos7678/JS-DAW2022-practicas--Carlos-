const cursos = ["Desarrollo de Aplicaciones Web",12345678, "Administración de Sistemas Informáticos en Red",87654321, "Desarrollo de Aplicaciones Multiplataforma", 12348765];
console.log(cursos.find((el, idx) => typeof el === "string" && idx === 0)+" , "+cursos.find((el, idx) => typeof el === "number" && idx === 1));
