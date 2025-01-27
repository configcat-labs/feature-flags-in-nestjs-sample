import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/*')
  root(@Req() req: Request, @Res() res: Response) {
    const viewName = this.appService.getViewName(req);
    res.render(viewName);
  }
}
