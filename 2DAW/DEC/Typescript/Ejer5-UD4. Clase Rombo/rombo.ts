class Rombo {
  #longitudDiagonalH;
  #longitudDiagonalV;

  constructor(longitudDiagonalH, longitudDiagonalV) {
    this.#longitudDiagonalH = longitudDiagonalH;
    this.#longitudDiagonalV = longitudDiagonalV;
  }

  calcularArea = () => this.#longitudDiagonalH * this.#longitudDiagonalV;
}

const rombo = new Rombo(10, 15);
const area = rombo.calcularArea();
console.log("Área:", area);
