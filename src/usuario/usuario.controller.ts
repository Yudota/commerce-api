import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}
  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
}
