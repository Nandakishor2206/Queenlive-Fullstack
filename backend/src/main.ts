import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  // Enable CORS if needed

  const port = 3002;
  await app.listen(port);
  console.log(`Backend is running at http://localhost:${port}`);  // Log the backend URL
}

bootstrap();
