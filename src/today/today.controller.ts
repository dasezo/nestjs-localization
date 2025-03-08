import { Controller, Get, Query } from '@nestjs/common';
import { YcI18nService } from '../yc-i18n/yc-i18n.service';

@Controller('today')
export class TodayController {
  constructor(private readonly i18n: YcI18nService) {}

  @Get()
  getTodayRun(@Query('km') km: number) {
    return {
      plannedRun: this.i18n.t('today.plannedRun', { args: { count: km } }),
    };
  }
}
