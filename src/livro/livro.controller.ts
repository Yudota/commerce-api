import { Body, Controller, Post } from '@nestjs/common';
import { LivroRepository } from './livro.repository';
import { Livro } from './livro.domain';

@Controller('/livros')
export class LivroController {
  private livroRepository = new LivroRepository();
  @Post()
  async cadastroDeLivro(@Body() livros: Livro) {
    this.livroRepository.salvar(livros);
    return livros;
  }
}
