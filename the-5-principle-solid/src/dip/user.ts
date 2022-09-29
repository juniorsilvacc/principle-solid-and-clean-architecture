// O código deve depende de uma abastração (interface) e não de uma implementação;

import { InterfaceUsuario } from "./interface"
import { UsuarioMysql } from "./usuario.mysql"
import { UsuarioPostgres } from "./usuario.postgres"

class Usuario {
  constructor(
    private criacaoUsuarioDoBanco: InterfaceUsuario
  ){}

  criacao(name: string, idade: number){
    // const usuario = new UsuarioMysql()
    // usuario.criar(name, idade)

    const usuario = this.criacaoUsuarioDoBanco.criar(name, idade)
    console.log(usuario)
  }
}

const usuarioMysql = new UsuarioMysql()
const usuarioPostgres = new UsuarioPostgres()

const usuario = new Usuario(usuarioPostgres)

export {Usuario}