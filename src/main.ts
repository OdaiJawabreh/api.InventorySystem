import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

async function bootstrap() {
  dotenv.config();

  const port = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);

    // Enable CORS
    app.use(cors());


  const config = new DocumentBuilder()
  .setTitle('InventorySystem')
  .setDescription('APIs for Inventory Manegement System')
  .setVersion('1.0')
  .addTag('Inventory')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs-inventory-api', app, document);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(port);
}
bootstrap();
