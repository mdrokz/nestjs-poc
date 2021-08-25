import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CommonService } from './services/common.service';
import { UserModule } from './user/user.module';
// MongooseModule.forRoot('mongodb://localhost/test')
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/test'), AuthModule],
  controllers: [AppController],
  providers: [AppService, CommonService],
})
export class AppModule { }
