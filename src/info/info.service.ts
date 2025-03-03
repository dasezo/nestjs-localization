import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../generated/i18n.generated';

@Injectable()
export class InfoService {
  constructor(private readonly i18n: I18nService<I18nTranslations>) {}

  getInfo() {
    return {
      about: this.i18n.t('common.about'),
      lastUpdated: new Date().toISOString(),
      routes: [
        {
          verb: 'GET',
          path: '/',
          description: 'Redirects to /info',
        },
        {
          verb: 'GET',
          path: '/info',
          description: 'You are here',
        },
        {
          verb: 'GET',
          path: '/today',
          description: 'Daily quote',
        },
        {
          posts: [
            {
              verb: 'GET',
              path: '/posts',
              description: 'Index of all posts',
            },
            {
              verb: 'GET',
              path: '/posts/1',
              description: 'Post with ID 1',
            },
            {
              verb: 'POST',
              path: '/posts',
              description: 'Create a new post',
            },
            {
              verb: 'PATCH',
              path: '/posts/1',
              description: 'Update post with ID 1',
            },
          ],
        },
      ],
    };
  }
}
