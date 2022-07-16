import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IConfigCatClient } from 'configcat-common';

// Import the ConfigCat JavaScript SSR client SDK we've installed
import * as configcat from "configcat-js-ssr";

@Controller('travel')
export class AppController {
  constructor(private readonly appService: AppService) {
    // Initialize the ConfigCat client with your SDK key
    this.configCatClient = configcat.createClient("-VbaCFs0RUGAghJLdTal-g/ZRvIWKTu0k-ZXxhOiebpBQ");
  }

  @Get('mileage')
  async getMileageFeature(): Promise<Boolean> {
    // Create a variable to store the state of the feature flag from ConfigCat.
    // This variable will be automatically updated every 60 seconds by default.
    const canShowMileageFeature = await this.configCatClient.getValueAsync("canshowmileagefeature", false)

    if (canShowMileageFeature) {
      return true
    } else {
      return false
    }
  }

  public configCatClient: IConfigCatClient
}
