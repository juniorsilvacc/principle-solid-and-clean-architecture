import { Desenvolvedor } from "./desenvolvedor";
import { Gerente } from "./gerente";

const funcionario = new Gerente('João', 1000)
console.log(`O nome do funcionario: ${funcionario.name}
  tem o salário de ${funcionario.calcularSalario()}`)

const funcionario2 = new Desenvolvedor('Junior', 200)
console.log(`O nome do funcionario: ${funcionario2.name}
  tem o salário de ${funcionario2.calcularSalario()}`)