import { InterfaceUsuario } from "./interface";

class UsuarioMysql implements InterfaceUsuario{
  criar(name: string, idade: number): void {
    console.log("Criando usuário COM MYSQL" + name + idade)
  }
}

export {UsuarioMysql}