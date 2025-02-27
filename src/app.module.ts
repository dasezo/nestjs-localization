import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { I18nModule, I18nYamlLoader, QueryResolver } from 'nestjs-i18n';
import { YcI18nModule } from './yc-i18n/yc-i18n.module';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loader: I18nYamlLoader,
      loaderOptions: {
        path: path.join(__dirname, '/locales/'),
        watch: true,
      },
      resolvers: [new QueryResolver(['lang'])],
      typesOutputPath: path.join(__dirname, '../src/generated/i18n.generated.ts'),
    }),
    InfoModule,
    PostsModule,
    YcI18nModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
