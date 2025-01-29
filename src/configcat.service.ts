import { Injectable } from '@nestjs/common';
import * as configcat from 'configcat-node';
// import

@Injectable()
export class ConfigCatService {
  private readonly configCatClient: any;

  constructor() {
    this.configCatClient = configcat.getClient(
      'PKDVCLf-Hq-h-kCzMp-L7Q/HhOWfwVtZ0mb30i9wi17GQ',
    );
  }

  getValue(key: string, defaultValue: any): any {
    return this.configCatClient.getValue(key, defaultValue);
  }
}
