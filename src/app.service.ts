import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSingleRandomAnimal(): string {
    return 'get Random Animal';
  }
  getMultipleRandomAnimals(): string {
    return 'get A Set Of Random Animals';
  }
  notAvailable(): string {
    return 'Not Available!';
  }
}
