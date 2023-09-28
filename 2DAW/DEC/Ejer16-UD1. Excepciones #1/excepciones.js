probabilidadError = 0.3;
commitCorrecto = 0;
commitIncorrecto = 0;

for (i = 1; i <= 10; i++) {
  numRandom = Math.random();
  try {
    if (numRandom <= probabilidadError) {
      throw new Error("Commit erroneo");
    } else {
      commitCorrecto++;
    }
    console.log("Enviando commit " + i + "...");
  } catch (error) {
    commitIncorrecto++;
    console.log("Enviando commit " + i + "...");
    console.log(error.message);
  }
}

console.log("Total commits enviados: " + (commitCorrecto + commitIncorrecto));
console.log("Commits correctos: " + commitCorrecto);
console.log("Commits erroneos: " + commitIncorrecto);
