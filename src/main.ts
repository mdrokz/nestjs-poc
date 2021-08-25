import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { CommonService } from './services/common.service';

async function bootstrap() {

  const logger = new Logger('Application');

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  );

  app.enableCors();

  const common = app.get(CommonService);

  await app.listen(3000, () => {
    logger.log('Starting CID Application');
    logger.log('Current Server Time: ' + new Date());
    logger.log('Current MAC address of machine: ' + common.getMacAddress());
  });
}
bootstrap();