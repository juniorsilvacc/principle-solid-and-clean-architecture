import { MeioDeTransporte } from "./meio-transporte";

class Metro implements MeioDeTransporte{
  viagem(): void {
    console.log("Regra de negócio da viagem")
  }

  manutencao(): void {
    console.log("Regra de negócio da manutencao do carro")
  }
}

export {Metro}