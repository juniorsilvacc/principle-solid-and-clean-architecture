import { Funcionario } from "./fucionario";

class Desenvolvedor extends Funcionario{
  calcularSalario(): number {
    const total = (this.salario * 10) + 100;
    return total;
  }
}

export {Desenvolvedor}