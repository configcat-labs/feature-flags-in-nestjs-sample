import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getViewName(): string {
    // Implement the logic to return the name of the view file
    return 'index';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
