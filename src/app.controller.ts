import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IConfigCatClient } from 'configcat-common';

// Import the ConfigCat JavaScript SSR client SDK we've installed
import * as configcat from 'configcat-js-ssr';

@Controller('travel')
export class AppController {
  constructor(private readonly appService: AppService) {
    // Initialize the ConfigCat client with your SDK key
    this.configCatClient = configcat.createClient('YOUR_CONFIGCAT_SDK_KEY');
  }

  @Get('mileage')
  async getMileageFeature(): Promise<boolean> {
    // Create a variable to store the state of the feature flag from ConfigCat.
    // This variable will be automatically updated every 60 seconds by default.
    const canShowMileageFeature = await this.configCatClient.getValueAsync(
      'canshowmileagefeature',
      false,
    );

    if (canShowMileageFeature) {
      // When true is returned to the frontend, the Gas Mileage feature is rendered
      return true;
    } else {
      // When false is returned to the frontend, the Gas Mileage feature is not rendered. Instead, the subscription form will be rendered.
      return false;
    }
  }

  public configCatClient: IConfigCatClient;
}
