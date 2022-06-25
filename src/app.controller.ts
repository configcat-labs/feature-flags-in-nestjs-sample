import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IConfigCatClient } from 'configcat-common';

// Import the ConfigCat JavaScript SSR client SDK we've installed
import * as configcat from "configcat-js-ssr";

@Controller('random-animals')
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {
      
      // Initialize the client using your SDK key:
      this.configCatClient = configcat.createClient("-VbaCFs0RUGAghJLdTal-g/ZRvIWKTu0k-ZXxhOiebpBQ");
    }
    
    @Get('single')
    getSingleRandomAnimal(): string {
      return this.appService.getSingleRandomAnimal();
    }
    
    @Get('multiple')
    async getMultipleRandomAnimalS(): Promise<string> {

    // Create a variable to store the state of the feature flag from ConfigCat.
    // This variable will be automatically updated every 60 seconds by default.
    const canShowRandomAnimals = await this.configCatClient.getValueAsync("canshowmultiplerandomanimals", false)
    
    if (canShowRandomAnimals) {
        // If the Feature Flag is on, return the set of random animals.
        return this.appService.getMultipleRandomAnimals();
      } else {
        // If the Feature Flag is off, return not available.
        return this.appService.notAvailable();
      }
    }

  // Define the type for the configCat client
  public configCatClient: IConfigCatClient
}
