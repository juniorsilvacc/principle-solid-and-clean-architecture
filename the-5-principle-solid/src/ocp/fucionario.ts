// A classe FUNCIONARIO está aberta para ser estendida, mas fechada para ser modificada

abstract class Funcionario {
  name: string;
  salario: number;

  constructor(name: string, salario: number) {
    this.name = name
    this.salario = salario
  }

  abstract calcularSalario(): number;
}

export {Funcionario}