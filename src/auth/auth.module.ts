import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from '../user/models/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/utils/constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserService } from 'src/user/user.service';
// MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
