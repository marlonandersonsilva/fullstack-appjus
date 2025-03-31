import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule,{ logger: ['log', 'error', 'warn', 'debug', 'verbose']});
  app.enableCors();
  //await app.listen(3001);

 // Configuração do Swagger
 const config = new DocumentBuilder()
 .setTitle('API de Advogados')
 .setDescription('Documentação da API para o sistema de serviços jurídicos.')
 .setVersion('1.0')
 .addBearerAuth() // Adiciona suporte a autenticação via Token JWT
 .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

await app.listen(3001);
}


bootstrap();
