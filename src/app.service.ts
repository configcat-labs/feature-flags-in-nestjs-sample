import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSingleAnimal(): string {
    return 'Cow';
  }
  getMultipleAnimals(): string {
    return 'Cow, Monkey, Dog';
  }
  notAvailable(): string {
    return 'Not Available!';
  }
}
