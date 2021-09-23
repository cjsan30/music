import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // await -> 지금 실행하라는 명령어로 실행예약을 확정시켜 값을 가져온다. 
  await app.listen(3001);
  // 여긴 왜 await이 붙어있는지?
}
bootstrap();
