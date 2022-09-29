import { MeioDeTransporte } from "./meio-transporte";

interface MeioDeTransporteComAbastecimento extends MeioDeTransporte{
  abastecimento(): void;
}

export {MeioDeTransporteComAbastecimento}