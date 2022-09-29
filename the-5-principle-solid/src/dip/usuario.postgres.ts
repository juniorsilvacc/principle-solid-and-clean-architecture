import { InterfaceUsuario } from "./interface";

class UsuarioPostgres implements InterfaceUsuario{
  criar(name: string, idade: number): void {
    console.log("Criando usuário com POSTGRES" + name + idade)
  }
}

export {UsuarioPostgres}