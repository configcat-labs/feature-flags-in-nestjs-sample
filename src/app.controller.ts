import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// Import the custom ConfigCat service
import { ConfigCatService } from './configcat.service';

@Controller('travel')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configCatService: ConfigCatService,
  ) {}

  @Get('mileage')
  async getMileageFeature(): Promise<boolean> {
    // Create a constant to store the state of the feature flag returned by the custom ConfigCat service.
    // This will be automatically updated every 60 seconds by default.
    const canShowMileageFeature =
      await this.configCatService.getFeatureStatus();

    if (canShowMileageFeature) {
      // When true is returned to the frontend, the Gas Mileage feature is rendered
      return true;
    } else {
      // When false is returned to the frontend, the Gas Mileage feature is not rendered. Instead, the subscription form will be rendered.
      return false;
    }
  }
}
