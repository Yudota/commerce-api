import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { LivroModule } from './livro/livro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule,
    LivroModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
