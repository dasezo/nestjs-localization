import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller('info')
export class InfoController {
  constructor(private infoService: InfoService) {}

  @Get()
  getInfo() {
    return this.infoService.getInfo();
  }

  @Get('about')
  getAbout(@I18n() i18n: I18nContext) {
    return i18n.t('common.about');
  }
}
