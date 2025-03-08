import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { YcI18nModule } from './yc-i18n/yc-i18n.module';
import { TodayController } from './today/today.controller';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT as string),
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USER,
      entities: [path.join(__dirname, '**/*.entity.{ts,js}')],
      synchronize: true,
      logging: true,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver],
      typesOutputPath: path.join(__dirname, '../src/generated/i18n.generated.ts'),
    }),
    InfoModule,
    PostsModule,
    YcI18nModule,
  ],
  controllers: [AppController, TodayController],
  providers: [AppService],
})
export class AppModule {}
