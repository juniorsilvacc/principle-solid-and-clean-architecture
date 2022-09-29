// Deve evitar que a classe não implemente métodos que não são necessários
// A gente implementa somente aquilo que é necessário, tirando os métodos que não são importantes para nossa classe

interface MeioDeTransporte{
  viagem(): void;
  manutencao(): void;
}

export {MeioDeTransporte}