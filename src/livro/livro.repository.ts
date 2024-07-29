export class LivroRepository {
  private livros = [];
  async salvar(livro) {
    this.livros.push(livro);
    console.log(JSON.stringify(this.livros, null, 2));
  }
}
