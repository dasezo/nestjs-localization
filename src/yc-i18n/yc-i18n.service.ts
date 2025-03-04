import { Injectable } from '@nestjs/common';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { I18nPath, I18nTranslations } from '../generated/i18n.generated';

@Injectable()
export class YcI18nService {
  constructor(private readonly i18n: I18nService<I18nTranslations>) {}

  t(key: I18nPath, options?: Record<string, any>) {
    const lang = I18nContext.current()?.lang;
    return this.i18n.translate(key, { lang, ...options });
  }
}
