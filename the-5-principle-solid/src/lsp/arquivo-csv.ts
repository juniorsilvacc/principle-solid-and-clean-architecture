import { PathArquivo } from "./arquivo";

class ArquivoCVS implements PathArquivo {
  parse(pathDoArquivo: string): string {
    console.log("Implementando Path: " + pathDoArquivo);
    return "Implementando CVS"
  }
}

export {ArquivoCVS}