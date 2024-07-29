export interface Livro {
  autor: string;
  categoria: CategoriaLivro[];
  ano: string;
  título: string;
  editora: string;
  edição: string;
  ISBN: string;
  numeroDePaginas: string;
  sinopse: string;
  dimensões: DimensoesLivro;
  grupo_precificacao: GrupoPrecificacaoLivro[];
  ean: string;
  status: string;
}

export interface DimensoesLivro {
  altura: number;
  largura: number;
  peso: number;
  profundidade: number;
}

export interface GrupoPrecificacaoLivro {
  idGrupo: string;
  descricao?: string;
  margemLucro: number;
}

export interface CategoriaLivro {
  idCategoria: string;
  descricao?: string;
}
