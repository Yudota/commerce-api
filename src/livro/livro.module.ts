import { Module } from '@nestjs/common';
import { LivroController } from './livro.controller';
import { LivroRepository } from './livro.repository';

@Module({
  controllers: [LivroController],
  providers: [LivroRepository],
})
export class LivroModule {}
