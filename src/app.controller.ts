import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { CIDERROR } from './utils/common';
import { CIDExceptionFilter } from './utils/filters/cid-exception.filter';
import { CIDException } from './utils/http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseFilters(CIDExceptionFilter)
  getHello(): string {
    throw new CIDException({ apiStatus: 200, cidErrors: [CIDERROR.USER_EXISTS], data: null });
    return this.appService.getHello();

  }
}
