import { Funcionario } from "./fucionario";

class Gerente extends Funcionario {
  calcularSalario(): number {
    const total = (this.salario * 22) + 1000;
    return total;
  }
}

export {Gerente}