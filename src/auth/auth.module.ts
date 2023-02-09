import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([User,]),
    PassportModule,
    JwtModule.register({
      secret: 'SDZIJDXDUH',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtService,
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { }
