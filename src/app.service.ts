import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSingleAnimal(): string {
    return 'Cow';
  }
  getMultipleAnimals(): string {
    return 'Cow, Monkey, Dog';
  }
  // This method would be called when the feature flag is turned off.
  notAvailable(): string {
    return 'Not Available!';
  }
}
