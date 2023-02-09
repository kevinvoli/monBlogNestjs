import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BlogModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'blognest',
        entities: [__dirname + "/**/**.entity.{ts,js}"],
        synchronize: true,
      }
    ),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
