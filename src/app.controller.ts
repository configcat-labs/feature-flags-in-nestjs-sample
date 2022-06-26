import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IConfigCatClient } from 'configcat-common';

// Import the ConfigCat JavaScript SSR client SDK we've installed
import * as configcat from "configcat-js-ssr";

@Controller('animals')
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {
      
      // Initialize the client using your SDK key:
      this.configCatClient = configcat.createClient("-VbaCFs0RUGAghJLdTal-g/ZRvIWKTu0k-ZXxhOiebpBQ");
    }
    
    @Get('single')
    getSingleAnimal(): string {
      return this.appService.getSingleAnimal();
    }
    
    @Get('multiple')
    async getMultipleAnimalS(): Promise<string> {

    // Create a variable to store the state of the feature flag from ConfigCat.
    // This variable will be automatically updated every 60 seconds by default.
    const canShowMultipleAnimals = await this.configCatClient.getValueAsync("canshowmultipleanimals", false)

    if (canShowMultipleAnimals) {
        // If the Feature Flag is on, return the set of random animals.
        return this.appService.getMultipleAnimals();
      } else {
        // If the Feature Flag is off, return not available.
        return this.appService.notAvailable();
      }
    }

  // Define the type for the configCat client
  public configCatClient: IConfigCatClient
}
