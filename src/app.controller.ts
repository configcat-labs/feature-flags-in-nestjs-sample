import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import { ConfigCatService } from './configcat.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configCatService: ConfigCatService,
  ) {}

  @Get('/*')
  async root(@Req() req: Request, @Res() res: Response) {
    const viewName = this.appService.getViewName(req);

    // Get the value of the feature flag
    const isMileageCalculatorFeatureEnabled =
      await this.configCatService.getValue('mileageCalculatorFeature', false);

    res.render(viewName, {
      isMileageCalculatorFeatureEnabled, // Pass the value to the view
    });
  }
}
