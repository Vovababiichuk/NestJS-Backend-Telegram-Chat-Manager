import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // Глобальний pipe для валідації
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const PORT = process.env.PORT || 8080; // Для Vercel потрібно отримувати порт з `process.env.PORT`
  await app.listen(PORT);
  console.log(`Server is running on http://localhost:${PORT}`);
}
bootstrap();
