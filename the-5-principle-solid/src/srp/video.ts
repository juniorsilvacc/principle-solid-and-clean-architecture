// A classe precisa ser somente uma responsabilidade

class Video {
  adicionarCategoriaVideo(video: string, categoria: string) {
    // Regra de negócio
    console.log(`adicionar categoria no video: O ${video} tem a categoria ${categoria}`);
  }

  adicionarAtor(video: string, ator: string) {
    // Regra de negócio
    console.log(`adicionar ator no video: O ${video} tem o ator ${ator}`);
  }
}

export {Video}