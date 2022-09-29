import { MeioDeTransporteComAbastecimento } from "./meio-transporte-com-abastecimento";

class Carro implements MeioDeTransporteComAbastecimento{
  viagem(): void {
    console.log("Regra de negócio da viagem")
  }

  manutencao(): void {
    console.log("Regra de negócio da manutencao do carro")
  }

  abastecimento(): void {
    console.log("Regra de negócio da abastecimento")
  }
}

export {Carro}