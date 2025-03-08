import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(@Query() query: Record<string, any>, @Res() res: Response) {
    const queryParams = new URLSearchParams(query).toString();
    return res.redirect(302, `/info?${queryParams}`);
  }
}
