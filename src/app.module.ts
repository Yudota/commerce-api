import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { LivrooModule } from './livro/livro.module';

@Module({
  imports: [UsuarioModule, LivrooModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
