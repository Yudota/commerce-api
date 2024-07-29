import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { LivroModule } from './livro/livro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/db.config.service';

@Module({
  imports: [
    UsuarioModule,
    LivroModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
