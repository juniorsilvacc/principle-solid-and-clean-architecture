import { PathArquivo } from "./arquivo";

class ArquivoJSON implements PathArquivo {
  parse(pathDoArquivo: string): string {
    console.log("Implementando Path: " + pathDoArquivo);
    return "Implementando JSON"
  }
}

export {ArquivoJSON}